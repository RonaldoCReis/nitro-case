import { useAtom } from 'jotai';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Modal from './components/ui/Modal';
import { statusList } from './utils/statusList';
import { taskModalAtom } from './atoms';

function App() {
  const [showModal] = useAtom(taskModalAtom);
  return (
    <main className="justify-center flex gap-12 max-w-4xl mx-auto">
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
