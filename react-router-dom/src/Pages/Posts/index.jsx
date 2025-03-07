import React from "react";
import { useParams, Link } from "react-router-dom";

import "../../styles/article.css";

export default function Posts() {
  const { id } = useParams();
  if (id) {
    return (
      <article className="article" id={id}>
        <h1 className="article__title">Lorem Ipsum</h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit
          nec velit elementum consectetur. Nullam ac neque id neque fermentum
          sollicitudin. Aliquam erat volutpat. Sed in nisl et ex iaculis
          placerat. Nulla facilisi. Donec vel enim vel lectus convallis
          tristique. Donec vel libero vel est sagittis consectetur id at justo.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Nulla facilisi.
        </p>
        <section className="article__references">
          <p className="article__creator">Created by: Loren ipusun dolar</p>
          <p className="article__date">
            <small>Published on: 12/05/2025</small>
          </p>
        </section>
      </article>
    );
  }

  return (
    <section className="posts">
      <article className="article" id="1">
        <h1 className="article__title">
          <Link to="/posts/1">Lorem Ipsum</Link>
        </h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit
          nec velit elementum consectetur. Nullam ac neque id neque fermentum
          sollicitudin. Aliquam erat volutpat. Sed in nisl et ex iaculis
          placerat. Nulla facilisi. Donec vel enim vel lectus convallis
          tristique. Donec vel libero vel est sagittis consectetur id at justo.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Nulla facilisi.
        </p>
        <section className="article__references">
          <p className="article__creator">Created by: Loren ipusun dolar</p>
          <p className="article__date">
            <small>Published on: 12/05/2025</small>
          </p>
        </section>
      </article>

      <article className="article" id="2">
        <h1 className="article__title">
          <Link to="/posts/2">Lorem Ipsum</Link>
        </h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit
          nec velit elementum consectetur. Nullam ac neque id neque fermentum
          sollicitudin. Aliquam erat volutpat. Sed in nisl et ex iaculis
          placerat. Nulla facilisi. Donec vel enim vel lectus convallis
          tristique. Donec vel libero vel est sagittis consectetur id at justo.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Nulla facilisi.
        </p>
        <section className="article__references">
          <p className="article__creator">Created by: Loren ipusun dolar</p>
          <p className="article__date">
            <small>Published on: 12/05/2025</small>
          </p>
        </section>
      </article>

      <article className="article" id="3">
        <h1 className="article__title">
          <Link to="/posts/3">Lorem Ipsum</Link>
        </h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed velit
          nec velit elementum consectetur. Nullam ac neque id neque fermentum
          sollicitudin. Aliquam erat volutpat. Sed in nisl et ex iaculis
          placerat. Nulla facilisi. Donec vel enim vel lectus convallis
          tristique. Donec vel libero vel est sagittis consectetur id at justo.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Nulla facilisi.
        </p>
        <section className="article__references">
          <p className="article__creator">Created by: Loren ipusun dolar</p>
          <p className="article__date">
            <small>Published on: 12/05/2025</small>
          </p>
        </section>
      </article>
    </section>
  );
}
