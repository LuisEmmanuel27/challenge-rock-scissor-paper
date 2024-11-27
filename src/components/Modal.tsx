import type { FunctionalComponent } from 'preact';
import type { ModalProps } from '@/interfaces/interfaces';
import { useEffect } from 'preact/hooks';
import picClose from '@/assets/icon-close.svg';

const Modal: FunctionalComponent<ModalProps> = ({ rules }) => {
  useEffect(() => {
    const modal = document.querySelector<HTMLDialogElement>('#Modal');
    const btnOpenModal = document.querySelector<HTMLButtonElement>('#openModal');
    const btnCloseModal = document.querySelector<HTMLButtonElement>('#closeModal');

    if (!modal || !btnOpenModal || !btnCloseModal) return;

    const openModal = () => modal.showModal();
    const closeModal = () => modal.close();

    btnOpenModal.addEventListener('click', openModal);
    btnCloseModal.addEventListener('click', closeModal);

    return () => {
      btnOpenModal.removeEventListener('click', openModal);
      btnCloseModal.removeEventListener('click', closeModal);
    };
  }, []);

  return (
    <dialog id="Modal" class="p-8 rounded-lg">
      <header class="flex items-center justify-between mb-10">
        <h1 class="text-Neutral-DarkText text-3xl font-bold">RULES</h1>
        <button id="closeModal" aria-label="Close Modal">
          <img src={picClose.src} alt="Close" />
        </button>
      </header>
      <img src={rules.src} alt="Rules" />
    </dialog>
  );
};

export default Modal;
