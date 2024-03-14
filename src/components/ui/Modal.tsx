import { useAtom } from 'jotai';
import { PropsWithChildren } from 'react';
import { taskModalAtom } from '../../atoms';

const Modal = ({ children }: PropsWithChildren) => {
  const [, setShowModal] = useAtom(taskModalAtom);

  const handleModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setShowModal(false);
    }
  };
  return (
    <div
      onClick={handleModal}
      className="fixed w-full h-full left-0 top-0 px-4 bg-black bg-opacity-20 flex justify-center items-center"
    >
      <div className="bg-white rounded-lg p-8 w-full max-w-3xl">{children}</div>
    </div>
  );
};

export default Modal;
