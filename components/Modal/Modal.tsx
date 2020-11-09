import { useLayoutEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getWindowWidth } from 'helpers/getWindowWidth';
import cls from './Modal.module.scss';

function useLockBodyScroll() {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = originalStyle);
  }, []);
}

function blockHandler(event) {
  event.stopPropagation();
}

const serializers = {
  marks: {
    link: ({ mark, children }) => {
      const { blank, href } = mark;
      return blank ? (
        <a href={href} target='_blank' rel='noopener'>
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      );
    },
  },
};

export const Modal = ({ modalContent, onClose, onChangeModal }) => {
  useLockBodyScroll();
  const windowWidth = getWindowWidth(768);
  const { item, idx } = modalContent;

  const showImage = windowWidth ? item.innerImage : item.image;

  function prevModal(event) {
    event.stopPropagation();
    onChangeModal(idx - 1);
  }
  function nextModal(event) {
    event.stopPropagation();
    onChangeModal(idx + 1);
  }

  return (
    <div className={cls.show + ' modal'} onClick={onClose}>
      <div className={cls.modalDialog} onClick={blockHandler}>
        {windowWidth && (
          <>
            <div
              className={cls.PrevModal + ' ' + cls.ModalBtn}
              onClick={prevModal}
            >
              <FontAwesomeIcon icon='arrow-alt-circle-left' />
            </div>
            <div
              className={cls.NextModal + ' ' + cls.ModalBtn}
              onClick={nextModal}
            >
              <FontAwesomeIcon icon='arrow-alt-circle-right' />
            </div>
          </>
        )}
        <div className={cls.modalContent + ' modal-content'}>
          <div className='modal-header'>
            <h2 className='modal-title w-100 text-center'>{item.title}</h2>
            <button
              type='button'
              className={cls.btnClose + ' close'}
              onClick={onClose}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className={cls.modalBody + ' modal-body'}>
            <div className='row'>
              <div className='col-12 col-md-6'>
                <img
                  src={showImage}
                  alt={cls.title}
                  className={cls.image}
                />
              </div>
              <div className='col-12 col-md-6'>
                <div className={cls.info}>
                  <h4>Project info</h4>
                  <p>{item.description}</p>
                </div>
                <div className={cls.detail}>
                  <h4>Project details</h4>
                  <BlockContent
                    blocks={item.content}
                    className={cls.content}
                    serializers={serializers}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
