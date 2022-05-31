import { Stack } from "react-bootstrap";
import ToDoDatePicker from "../../components/todoComponents/ToDoDatePicker";

function Index() {
  return (
    <div>
      <div className="mt-5 py-5 px-5">
        <h1 className="display-4 " dir="rtl">
          به <span className="fw-bold display-5">Todo List</span> خوش آمادید
        </h1>
      </div>

      <ToDoDatePicker />
    </div>
  );
}

export default Index;
