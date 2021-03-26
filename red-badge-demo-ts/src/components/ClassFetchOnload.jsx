// class component for conversion
import React, { Component } from 'react';
import { Container, Media } from 'reactstrap';

class ClassFetchOnload extends Component {
  constructor(props) {
    super(props);
    this.state = { blogPostData: [] };
  }

  fetchBlogData = () => {
    const url = "https://jsonplaceholder.typicode.com/comments?postId=1";

    fetch(url)
      .then((res) => res.json())
      .then((json) => this.setState({ blogPostData: json }));
  };

  displayBlogPosts = () => {
    return this.state.blogPostData.map((data) => (
      <Media>
        <Media left href="#">
          <Media
            object
            src="https://picsum.photos/60"
            alt="Generic placeholder image"
            style={{ marginRight: "10px" }}
          />
        </Media>
        <Media body>
          <Media heading>{data.name.toUpperCase()}</Media>
          {data.body}.
          <p>
            Email: <a href={`mailto:${data.email}`}>{data.email}</a>
          </p>
        </Media>
      </Media>
    ));
  };

  componentDidMount() {
      this.fetchBlogData();
  }

  render() {
    return (
      <Container>
        <h3>From the Class</h3>
        {this.displayBlogPosts()}
      </Container>
    );
  }
}

export default ClassFetchOnload;