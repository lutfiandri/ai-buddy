import { Layout } from '@/components/layout/layout';
import { BubbleChat } from '@/components/template/bubble-chat';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

function Chat() {
  return (
    <Layout>
      <div className="flex-1 flex flex-col justify-center items-center">
        <BubbleChat type="human" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
        <BubbleChat type="ai" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
        <BubbleChat type="human" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
        <BubbleChat type="ai" avatarFallback="LA">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          sint ipsa debitis esse cum veritatis voluptatem omnis, ex ducimus enim
          quae natus alias, accusantium eveniet aspernatur placeat maxime
          consectetur numquam!
        </BubbleChat>
      </div>
    </Layout>
  );
}

export default Chat;
