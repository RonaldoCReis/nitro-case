import { useAtom } from 'jotai';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/ui/Modal';
import { statusList } from './utils/statusList';
import { taskModalAtom } from './atoms';

function App() {
  const [showModal] = useAtom(taskModalAtom);
  return (
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
  );
}

export default App;
