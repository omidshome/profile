import { Stack } from "react-bootstrap";

function Index() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <h4>Regular h4</h4>
      <p className="h2">p with h1 bootstrap</p>

      <Stack gap={5}>
        <div className="bg-light border">First item</div>
        <div className="bg-light border">Second item</div>
      </Stack>
    </div>
  );
}

export default Index;
