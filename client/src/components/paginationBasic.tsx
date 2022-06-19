import { HTMLProps, useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";

interface Props {
  active: number;
  total: number;
  onPageChange: (no: number) => void;
}

export function PaginationBasic(props: Props & HTMLProps<any>) {
  const [items, setitems] = useState<any[]>([]);
  const [activeset, setactiveset] = useState(1);

  const onNextSet = () => {
    setactiveset((activeset) => activeset + 1);
  };
  const onBack = () => {
    setactiveset((activeset) => activeset - 1);
  };

  const handleClick = (page: number) => {
    props.onPageChange(page);
  };

  
  useEffect(() => {
    let items: any[] = [];
    for (let i = 1 + (activeset - 1) * 10; i <= activeset * 7; i++) {
      items.push(
        <Pagination.Item
          title={"page " + i}
          onClick={() => handleClick(i)}
          key={i}
          disabled={i > props.total}
          active={i === props.active}
        >
          {i}
        </Pagination.Item>
      );
    }

    if (activeset * 7 < props.total) {
      items = [...items, <Pagination.Next onClick={onNextSet} />];
    }

    if (activeset > 1) {
      items = [<Pagination.Prev onClick={onBack} />, ...items];
    }

    setitems(items);
  }, [props.active, activeset, props.total]);

  return <Pagination size="sm" className={props.className}>{items}</Pagination>;
}
