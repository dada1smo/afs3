import { MetaProps } from '@/lib/mdx';
import { FunctionComponent } from 'react';
import Row from '../row';
import Column from '../column';
import Card from '../card';

interface PostListProps {
  posts: MetaProps[];
}

const PostList: FunctionComponent<PostListProps> = ({ posts }) => {
  const postsGrid = splitCol(posts);

  return (
    <Row className="h-full mt-10" gutter="wide">
      {postsGrid.map((g, i) => {
        return (
          <Column md={4} key={i} gutter="wide">
            {g.map((p, i) => {
              return (
                <Card
                  key={p.title}
                  title={p.title || ''}
                  subtitle={p.subtitle || ''}
                  href={`/posts/${p.slug}`}
                  color={determineStyle(p.order)}
                  className={determineMargin(i, p.col)}
                />
              );
            })}
          </Column>
        );
      })}
    </Row>
  );
};

export default PostList;

function determineCol(index: number) {
  if (index % 3 === 0) {
    return 3;
  }

  if (index % 3 === 2) {
    return 2;
  }

  return 1;
}

function splitCol(posts: MetaProps[]) {
  const postsWithCol = posts
    .flatMap((p) => [p, p, p, p])
    .sort((a, b) => {
      return (
        new Date(b.publishDate || '').valueOf() -
        new Date(a.publishDate || '').valueOf()
      );
    })
    .map((p, i) => {
      return {
        ...p,
        order: i + 1,
        col: determineCol(i + 1),
      };
    });

  return [
    postsWithCol.filter((p) => p.col === 1),
    postsWithCol.filter((p) => p.col === 2),
    postsWithCol.filter((p) => p.col === 3),
  ];
}

function determineMargin(index: number, col: number) {
  if (index === 0) {
    if (col === 1) {
      return '';
    }

    if (col === 2) {
      return 'md:mt-32 mt-6';
    }

    if (col === 3) {
      return 'md:mt-16 mt-6';
    }
  }

  return 'mt-6';
}

function determineStyle(order: number) {
  if (order % 4 === 0) {
    return 'accentMid';
  }

  if (order % 4 === 1) {
    return 'primaryLight';
  }

  if (order % 4 === 2) {
    return 'primaryMid';
  }

  return 'primaryDark';
}
