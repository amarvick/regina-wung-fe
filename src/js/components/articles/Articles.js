import React, {Component, StartupActions} from 'react';
import ArticleContainer from './ArticleContainer';
import ArticleError from './ArticleError';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Articles.scss';
import { connect } from 'react-redux';
import { getArticles } from '../../actions/articleActions';

class Articles extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 10000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 815, min: 0 },
        items: 1
      }
    };

    const portfolio = this.props.articlesFetching 
      ? <div><div className="loader"/><br/>Loading Articles...</div>
      : (
      this.props.articlesLoadingError !== null 
        ? <ArticleError 
            error={this.props.articlesLoadingError}
            reloadArticles={() => getArticles()}
          />
        : (
          <Carousel 
            responsive={responsive}
            autoPlay={false}
            transitionDuration={500}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-60-px"
          >
            {this.props.articles.map((article, index) => {
              return (
                <ArticleContainer 
                  data={article}
                  index={index}
                />
              )
            })}
          </Carousel>
        )
    );

    return (
      <div id="portfolio">
        {portfolio}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch,
  getArticles: dispatch(getArticles()),
  startup: () => dispatch(StartupActions.startup())
})

const mapStateToProps = (state) => ({
  articles: state.article.articles.articles,
  articlesFetching: state.article.articlesFetching,
  articlesLoadingError: state.article.articlesLoadingError
})

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
