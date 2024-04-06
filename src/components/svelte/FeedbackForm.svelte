<script lang="ts">
  export const prerender = false;
  let responseMessage: string;

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    // console.log(formData)


    // let body = {}
    // for (let field of formData) {
    //   const [key,value] = field
    //   body[key] = value
    // }
    // console.log(body)

    const response = await fetch("/endpoints/feedback", {
      method: "POST",
    //   headers: {
    //   'Content-Type': 'application/json'
    // // like application/json or text/xml
    //   },
      body: formData,
    });
    const data = await response.json();
    responseMessage = data.message;
    console.log(responseMessage)
  }
</script>

<form on:submit={submit}>
  <label>
    Name
    <input type="text" id="name" name="name" required />
  </label>
  <label>
    Email
    <input type="email" id="email" name="email" required />
  </label>
  <label>
    Message
    <input id="message" name="message" required />
  </label>
  <button>Send</button>
  {#if responseMessage}
    <p>{responseMessage}</p>
  {/if}
</form>
