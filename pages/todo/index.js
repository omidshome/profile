import { Container, Stack } from "react-bootstrap";
import ToDoDatePicker from "../../components/todoComponents/ToDoDatePicker";

function Index() {
  return (
    <Container>
      <div className="mt-5 py-5">
        <h1 className="display-4 " dir="rtl">
          به <span className="fw-bold display-5">Todo List</span> خوش آمادید
        </h1>
      </div>

      <ToDoDatePicker />
    </Container>
  );
}

export default Index;
