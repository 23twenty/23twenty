import React from 'react';

class ParallaxContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state= {
           isMobile: false
        }
    }

    componentDidMount() {
        this.setState({isMobile: window.innerWidth < 768})
    }

    render() {
        const { imgUrl, caption, className } = this.props;
        const { isMobile } = this.state;
        return (
            <div className={`wrapper image-wrapper bg-image inverse-text ${className} ${isMobile ? 'mobile' : ''}`} style={{backgroundImage: `url(${imgUrl})`}}>
                <div className="container inner pt-120 pb-120 text-center">
                    <h1 className="heading mb-0">{caption}</h1>
                </div>
            </div>
        )
    }
}

export default ParallaxContainer;