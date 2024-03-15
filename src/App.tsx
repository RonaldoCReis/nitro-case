import { useAtomValue } from 'jotai';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/ui/Modal';
import { statusList } from './constants/statusList';
import { taskModalAtom } from './atoms';
import Header from './components/layout/Header';

function App() {
  const showModal = useAtomValue(taskModalAtom);
  return (
    <>
      <Header />
      <main className="justify-center flex gap-8 xl:gap-12 max-w-lg md:max-w-4xl mx-auto px-4 flex-col md:flex-row">
        {statusList.map((status) => (
          <TaskList key={status} status={status} />
        ))}
        {showModal && (
          <Modal>
            <TaskForm />
          </Modal>
        )}
      </main>
    </>
  );
}

export default App;
