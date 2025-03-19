import { Testimony } from "./testimony";

export function Testimonies() {
  return (
    <>
      <h1>Testimonies</h1>
      <Testimony
        person="Ruth"
        dog="Oryn"
        message={
          "Robert walks our very energetic cocker spaniel every week without fail. He is so good with our dog and our dog absolutely loves him. He goes on a variety of walks, is keen to follow the same commands/routines that we have for consistency for the dog and we always have a very tired boy after his walk (which is amazing!!!). Would absolutely recommend him to anyone looking for a dog lover to walk their dog!"
        }
      />
      <Testimony
        person="Peter"
        dog="Charlie"
        message={
          "Rob turns up on time every week rain or shine (mainly rain!). Charlie likes him and he likes Charlie. Good borrower, recommended."
        }
      />
      <Testimony
        person="Clare"
        dog="Lilah"
        message={
          "Rob has been a fantastic borrower of our dog Lilah. He has come out in all weathers for a few years now and is genuinely a real dog lover- you can see how much dogs mean to him and I have no hesitation in recommending him."
        }
      />
      <Testimony
        person="Tony"
        dog="Lucky"
        message={
          "Rob is a fantastic walker for our lucky. He takes him out every Tuesday night without fail, and lucky loves him as well. He's all over him when he comes. 100% recommended."
        }
      />
    </>
  );
}
