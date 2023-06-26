import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main class="text-center mx-auto text-gray-600 p-4">
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Counter />
    </main>
  );
}
