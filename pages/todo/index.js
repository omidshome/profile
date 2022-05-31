import { Stack } from "react-bootstrap";
import ToDoDatePicker from "../../components/todoComponents/ToDoDatePicker";

function Index() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h4>Regular h4</h4>
      <p className="h2">p with h1 bootstrap</p>

      <h1 className="display-4" dir="rtl">
        به فوتو خوش آمادید
      </h1>

      <ToDoDatePicker />
    </div>
  );
}

export default Index;
