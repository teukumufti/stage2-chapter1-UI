import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/Category.css";

const Category = () => {
  return (
    <div>
      <h4 className="title-category">List Category</h4>;
      <ListGroup horizontal className="list-category">
        <ListGroup.Item className="item1-category">No</ListGroup.Item>
        <ListGroup.Item className="item1-category">
          Category Name
        </ListGroup.Item>
        <ListGroup.Item className="item1-category">Action</ListGroup.Item>
      </ListGroup>
      {/*  */}
      <ListGroup horizontal className="list-category">
        <ListGroup.Item className="item2-category">1</ListGroup.Item>
        <ListGroup.Item className="item2-category">Mouse</ListGroup.Item>
        <ListGroup.Item className="item2-category">
          <Link to="/editcategory">
            <Button className="button-edit" size="sm">
              Edit
            </Button>
          </Link>
          <Button className="button-delete" size="sm">
            Delete
          </Button>
        </ListGroup.Item>
      </ListGroup>
      {/*  */}
      <ListGroup horizontal className="list-category">
        <ListGroup.Item className="item3-category">2</ListGroup.Item>
        <ListGroup.Item className="item3-category">Keyboard</ListGroup.Item>
        <ListGroup.Item className="item3-category">
          <Button className="button-edit" size="sm">
            Edit
          </Button>
          <Button className="button-delete" size="sm">
            Delete
          </Button>
        </ListGroup.Item>
      </ListGroup>
      {/*  */}
      {/*  */}
      <ListGroup horizontal className="list-category">
        <ListGroup.Item className="item2-category">3</ListGroup.Item>
        <ListGroup.Item className="item2-category">Bag</ListGroup.Item>
        <ListGroup.Item className="item2-category">
          <Button className="button-edit" size="sm">
            Edit
          </Button>
          <Button className="button-delete" size="sm">
            Delete
          </Button>
        </ListGroup.Item>
      </ListGroup>
      {/*  */}
      <ListGroup horizontal className="list-category">
        <ListGroup.Item className="item3-category">4</ListGroup.Item>
        <ListGroup.Item className="item3-category">Stationary</ListGroup.Item>
        <ListGroup.Item className="item3-category">
          <Button className="button-edit" size="sm">
            Edit
          </Button>
          <Button className="button-delete" size="sm">
            Delete
          </Button>
        </ListGroup.Item>
      </ListGroup>
      {/*  */}
      {/*  */}
      <ListGroup horizontal className="list-category">
        <ListGroup.Item className="item2-category">5</ListGroup.Item>
        <ListGroup.Item className="item2-category">Doll</ListGroup.Item>
        <ListGroup.Item className="item2-category">
          <Button className="button-edit" size="sm">
            Edit
          </Button>
          <Button className="button-delete" size="sm">
            Delete
          </Button>
        </ListGroup.Item>
      </ListGroup>
      {/*  */}
      <ListGroup horizontal className="list-category">
        <ListGroup.Item className="item3-category">6</ListGroup.Item>
        <ListGroup.Item className="item3-category">Pillow</ListGroup.Item>
        <ListGroup.Item className="item3-category">
          <Button className="button-edit" size="sm">
            Edit
          </Button>
          <Button className="button-delete" size="sm">
            Delete
          </Button>
        </ListGroup.Item>
      </ListGroup>
      {/*  */}
    </div>
  );
};

export default Category;
