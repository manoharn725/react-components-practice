import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  
  const handleClick = () => {
    setShowModal(true);
  };

  const  handleClose = () => {
   setShowModal(false);
  }

  const actionBar = <div><Button onClick={handleClose} success>I Accept</Button></div>
  const modal = <Modal onClose={handleClose} actionBar={actionBar} >
    <p>Here is some important information that i'd like you to review!</p>
  </Modal>

  return (
    <div>
         <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, qui earum animi reprehenderit suscipit quae expedita consectetur nostrum optio officiis repudiandae sit a sapiente commodi odit id, quod architecto harum voluptates. Perferendis ea optio ipsa! Distinctio repellendus aspernatur quod animi laudantium, aliquam illo ea rem, beatae explicabo odit provident magni unde quo praesentium libero sit corporis quas tempora dignissimos. Ullam suscipit, cumque distinctio temporibus in totam esse illum minus expedita atque perspiciatis veniam vero. Illo, autem. Voluptate omnis voluptates sint placeat, dolores pariatur laboriosam expedita ex neque et molestiae vero nemo cum, maiores corporis quis. Ipsam error aliquid magni veniam!</p>
    </div>
  );
}
export default ModalPage;