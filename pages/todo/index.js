import { Container, Stack } from "react-bootstrap";
import ToDoDatePicker from "../../components/todoComponents/ToDoDatePicker";

function Index() {
  const ConvertToArabicNumbers = (num) => {
    const arabicNumbers =
      "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669";
    return new String(num).replace(/[0123456789]/g, (d) => {
      return arabicNumbers[d];
    });
  };

  return (
    <Container>
      <div className="mt-5 py-5">
        <h1 className="display-4 " dir="rtl">
          به <span className="fw-bold display-5">Todo List</span> خوش آمادید
        </h1>
        <h2 dir="rtl">{`تست اعداد ${ConvertToArabicNumbers(123456789)}`}</h2>
        <h1 className="display-4 " dir="rtl">
          این پروژه در حال تکمیل میباشد لطفا بعدا بازدید بفرمایید
        </h1>
      </div>

      <ToDoDatePicker />
    </Container>
  );
}

export default Index;
