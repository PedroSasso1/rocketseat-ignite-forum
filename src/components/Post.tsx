import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[]
}

export function Post({ author, publishedAt, content}: PostProps) {
  const [comments, setComments] = useState([{ content: 'Post muito bacana, hein?!' }]);
  const [newCommentContent, setNewCommentContent] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([
      ...comments,
       { content: newCommentContent }
    ])
    setNewCommentContent('')
  }

  function handleNewCommentContentChange(event: ChangeEvent<HTMLTextAreaElement>) { 
    event.target.setCustomValidity('');
    setNewCommentContent(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Este é um campo obrigatório!');
  }

  function deleteComment(commentKey: string) {
    const commentsWithoutDeletedOne = comments.filter((comment) => comment.content !== commentKey)
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = !newCommentContent.length;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} withBorder={true}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {
          content.map((line) => {
            if(line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            }
            else {
              return <p key={line.content}><a href="#">{line.content}</a></p>
            }
          })
        }
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name='comment'
          placeholder='Deixe seu comentário'
          value={newCommentContent}
          onChange={handleNewCommentContentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {
          comments
            .map((comment) => (
              <Comment 
                key={comment.content} 
                content={comment.content} 
                onDeleteComment={deleteComment} 
              />
            ))
        }
      </div>
    </article>
  )
}