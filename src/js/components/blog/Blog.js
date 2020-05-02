import React, {Component, StartupActions} from 'react';
import BlogPost from './BlogPost';
import BlogPostThumbnail from './BlogPostThumbnail';
import BlogPostNotFound from './BlogPostNotFound';
import './Blog.scss';

import { connect } from 'react-redux';
import { getBlogPosts } from '../../actions/blogActions';

class Blog extends React.Component {
  render() {
    console.log(this.props);
    const id = parseInt(this.props.match.params.id) - 1;

    // const blogPosts = [
    //   {
    //     id: 0,
    //     title: 'Sample title',
    //     date: '4/16/2020',
    //     image: 'BreakingNews.jpg',
    //     headerImage: 'BreakningNews.jpg',
    //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quam orci, semper sed est non, tincidunt venenatis arcu. Praesent at justo vel nunc congue sagittis. Integer dapibus lacus et odio faucibus vehicula. Mauris fringilla finibus ante, nec posuere sapien euismod vel. Suspendisse potenti. Aenean at ligula massa. Quisque mollis, mauris at dapibus finibus, tellus sapien hendrerit libero, sed luctus nisi metus a turpis. Nulla volutpat pharetra pellentesque. In hac habitasse platea dictumst. Pellentesque turpis velit, blandit sit amet sapien ut, euismod volutpat ex. Proin tristique blandit elit eget vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae\nCras non purus sit amet metus aliquam finibus. Morbi sollicitudin lorem neque, eget molestie mi suscipit efficitur. Donec bibendum orci eu purus interdum, at molestie nisi dapibus. Nullam at auctor elit. Nunc ultricies turpis in hendrerit sagittis. Maecenas egestas volutpat tempus. Phasellus sagittis dui id bibendum aliquet. Mauris gravida sem convallis orci interdum condimentum. Nam quis felis luctus, ultrices est vitae, tristique turpis. Etiam sagittis augue eget bibendum pellentesque. Praesent egestas convallis sodales. Maecenas placerat viverra facilisis. Maecenas porttitor sit amet neque sed finibus. Integer rhoncus placerat tortor, ac consequat nisl vestibulum quis. Donec ut erat nisl. Nunc eu egestas lectus, sollicitudin posuere nisi. Nunc eget massa quis turpis dignissim pellentesque varius nec nibh. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque risus augue, ornare id blandit et, viverra vel urna. Proin libero tellus, viverra ut ipsum at, ornare pharetra quam. Duis ex tellus, scelerisque nec fringilla ac, aliquet congue ipsum. Proin semper pulvinar felis id accumsan. Maecenas sit amet elit at massa sollicitudin condimentum scelerisque in mauris. Mauris consectetur, felis tempus ullamcorper porttitor, lectus ligula aliquet tellus, et consectetur quam lorem non magna. Mauris sit amet ligula faucibus, vehicula massa id, euismod turpis. Cras quis porttitor dui, et scelerisque odio. Quisque vitae tincidunt ex. Curabitur in lectus arcu. Quisque in leo quis est malesuada tempor eu et eros. Praesent bibendum nisi arcu, vel blandit purus efficitur a. Vestibulum pharetra leo massa, id rutrum ex sollicitudin eu. Nulla faucibus iaculis ante, eu ultrices quam dapibus ac. Aliquam gravida aliquet pellentesque. Ut lacus sem, dignissim vel sem aliquet, auctor eleifend ex. Mauris elementum blandit fringilla. Fusce efficitur ultricies suscipit. Etiam quis aliquet ipsum. Donec vel aliquet nulla. Phasellus orci eros, mattis id massa vitae, porta sodales purus.',
    //     topic: 'Sample',
    //     comments: [
    //       {
    //         id: 10,
    //         name: 'Alberto',
    //         email: 'alberto@gmail.com',
    //         comment: 'This is a great article!',
    //         date: '4/16/2020',
    //         responses: [
    //           {
    //             id: 12,
    //             name: 'Regina',
    //             email: 'regina@gmail.com',
    //             comment: 'Thank you Alberto!',
    //             date: '4/16/2020',
    //             responses: [],
    //           },
    //         ],
    //       },
    //     ],
    //   },

    //   {
    //     id: 1,
    //     title: 'Sample title 1',
    //     date: '4/16/2020',
    //     image: 'BreakingNews.jpg',
    //     headerImage: 'BreakningNews.jpg',
    //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit semper nunc ac commodo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam semper porttitor nisl at vulputate. Phasellus nec mi lacinia neque venenatis porttitor bibendum a purus. Maecenas efficitur sapien lorem, pharetra maximus sem convallis quis. Proin pellentesque mattis fringilla. Fusce est magna, pulvinar vel varius ac, pellentesque vel purus. Aliquam ut leo vel nulla volutpat mollis. Morbi varius nisl lacus, non molestie metus viverra et. Vestibulum euismod hendrerit efficitur. Pellentesque nec tincidunt quam. Aliquam luctus, ante sit amet lobortis commodo, sapien lorem pulvinar nibh, eu vehicula dolor ligula nec odio. Quisque venenatis nulla odio.',
    //     topic: 'Sample',
    //     comments: [
    //       {
    //         id: 10,
    //         name: 'Alberto',
    //         email: 'alberto@gmail.com',
    //         text: 'This is a great article!',
    //         date: '4/18/2020',
    //         responses: [
    //           {
    //             id: 12,
    //             name: 'Regina',
    //             email: 'regina@gmail.com',
    //             comment: 'Thank you Alberto!',
    //             date: '4/19/2020',
    //             responses: [],
    //           },
    //         ],
    //       },
    //     ],
    //   },

    //   {
    //     id: 2,
    //     title: 'Sample title 2',
    //     date: '4/16/2020',
    //     image: 'BreakingNews.jpg',
    //     headerImage: 'BreakningNews.jpg',
    //     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultricies tortor tellus, eu faucibus justo hendrerit sit amet. Vivamus vitae convallis nunc. Donec quam quam, congue lacinia iaculis id, pellentesque vitae mauris. Nulla ullamcorper, ligula sed accumsan posuere, ipsum dui condimentum nibh, at facilisis ligula lacus id turpis. Nulla volutpat mattis faucibus. In non consectetur augue, ac malesuada ex. Ut leo velit, condimentum non tempus non, pulvinar vitae mi. Donec vitae augue sit amet felis aliquam tincidunt. Pellentesque egestas pretium faucibus. Sed et porta purus.',
    //     topic: 'Sample',
    //     comments: [
    //       {
    //         id: 10,
    //         name: 'Alberto',
    //         email: 'alberto@gmail.com',
    //         comment: 'This is a great article!',
    //         date: '4/18/2020',
    //         responses: [],
    //       },
    //     ],
    //   },
    // ];

    let content;
    if (!isNaN(id)) {
      const post = this.props.blogPosts[id];
      console.log(post);
      content = (post != null) ? ( 
        <div>
          <BlogPost 
            post={post}
            previousArticle={this.props.blogPosts[id - 1] ?? null}
            nextArticle={this.props.blogPosts[id + 1] ?? null}
          />
        </div> 
      ) : (
        <BlogPostNotFound />
      )
    } else {
      content = (
        <div>
          {this.props.blogPosts.map((blog, index) => {
            return (
              <BlogPostThumbnail post={blog} index={index} />
            )
          })}
        </div> 
      )
    }

    return (
      <div className="blog">
        {content}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  getBlogPosts: dispatch(getBlogPosts()),
  startup: () => dispatch(StartupActions.startup())
})

const mapStateToProps = (state) => ({
  blogPosts: state.blog.blogPosts,
  blogPostsFetching: state.blog.blogPostsFetching,
  blogPostsLoadingError: state.blog.blogPostsLoadingError
})

export default connect(mapStateToProps, mapDispatchToProps)(Blog);