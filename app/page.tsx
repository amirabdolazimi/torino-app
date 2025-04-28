import Button from "./components/atoms/Button";
import Input from "./components/atoms/Input";

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="my-5">Design-System</h1>
      <div>
        <Button radius="sm" fontSize="base" fontWeight="normal">
          تایید
        </Button>
        <br />
      </div>
    </div>
  );
}
