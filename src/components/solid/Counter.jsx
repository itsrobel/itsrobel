export const prerender = false;
// import { createResource } from "solid-js";
import { createSignal } from "solid-js";
import { Show } from "solid-js";

export function Counter() {
  const [count, setCount] = createSignal(0);
  const squared = () => count * 2;
  const Increment = () => setCount(count() + 1);
  console.log("some thing");
  return (
    <>
      <h2>Count:</h2>
      <button
        onClick={() => {
          Increment();
          console.log(count());
        }}
      >
        Increment
      </button>
      <Show when={count()}>
        <div>{count()}</div>
        {/* <div>{squared()}</div> */}
      </Show>
    </>
  );
}

// export default CharacterName;
