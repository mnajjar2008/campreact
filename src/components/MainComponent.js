import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { postComment, fetchCampsites, fetchComments, fetchPromotions, fetchPartners, postFeedback } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions,
    };
};

const mapDispatchToProps = {
    postComment: (campsiteId, rating, author, text) => postComment(campsiteId, rating, author, text),
    fetchCampsites: () => fetchCampsites(),
    resetFeedbackForm: () => actions.reset('feedbackForm'),
    fetchComments: () => fetchComments(),
    fetchPromotions: () => fetchPromotions(),
    fetchPartners: () => fetchPartners(),
    postFeedback: feedback => postFeedback(feedback),
};

class Main extends Component {
    componentDidMount() {
        setTimeout(() => this.props.fetchCampsites(), 3000);
        setTimeout(() => this.props.fetchComments(), 3000);
        setTimeout(() => this.props.fetchPromotions(), 3000);
        setTimeout(() => this.props.fetchPartners(), 3000);
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    campsite={this.props.campsites.campsites.filter(campsite => campsite.featured)[0]}
                    campsitesLoading={this.props.campsites.isLoading}
                    campsitesErrMess={this.props.campsites.errMess}
                    promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
                    promotionLoading={this.props.promotions.isLoading}
                    promotionErrMess={this.props.promotions.errMess}
                    partnerLoading={this.props.partners.isLoading}
                    partnerErrMess={this.props.partners.errMess}
                    partner={this.props.partners.partners.filter(partner => partner.featured)[0]}
                />
            );
        };
        const CampsiteWithId = props => {
            return (
                <CampsiteInfo
                    campsite={this.props.campsites.campsites.filter(campsite => campsite.id === +props.match.params.campsiteId)[0]}
                    isLoading={this.props.campsites.isLoading}
                    errMess={this.props.campsites.errMess}
                    comments={this.props.comments.comments.filter(comment => comment.campsiteId === +props.match.params.campsiteId)}
                    postComment={this.props.postComment}
                    commentsErrMess={this.props.comments.errMess}
                />
            );
        };

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component={HomePage} />
                            <Route exact path="/directory" render={() => <Directory campsites={this.props.campsites} />} />
                            <Route path="/directory/:campsiteId" component={CampsiteWithId} />
                            <Route exact path="/contactus" render={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postfeedBack={this.props.postFeedback} />} />
                            <Route exact path="/aboutus" render={() => <About partners={this.props.partners} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
