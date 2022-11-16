import React, { Component } from 'react';
export class Categories extends Component {
    constructor(props) {
        super(props);
        this.handleRun = this.handleRun.bind(this);
        this.handleRide = this.handleRide.bind(this);
        this.handleWalk = this.handleWalk.bind(this);
        this.handleHike = this.handleHike.bind(this);
        this.handleDistance = this.handleDistance.bind(this);
    }

    componentDidMount() {
        this.handleRun();
    }


    handleRun() {
        const { classes, fetchRunClassesList } = this.props;
        fetchRunClassesList({ data: classes.run, active: 'run' });
    }

    handleRide() {
        const { classes, fetchRunClassesList } = this.props;

        fetchRunClassesList({ data: classes.ride, active: 'ride' });
    }

    handleWalk() {
        const { classes, fetchRunClassesList } = this.props;


        fetchRunClassesList({ data: classes.walk, active: 'walk' });
    }

    handleHike() {
        const { classes, fetchRunClassesList } = this.props;


        fetchRunClassesList({ data: classes.hike, active: 'hike' });
    }

    handleDistance() {
        const { classes, fetchRunClassesList } = this.props;


        fetchRunClassesList({ data: classes.distance, active: 'distance' });
    }

    render() {
        const { active } = this.props;
        return (
            <div className='nav_categories'>
                <p>Demo Classes</p>
                <div className='categories'>
                    <button className={active === 'run' ? 'highlight' : null} onClick={this.handleRun}>
                        <span className='icon-run'></span>
                        <p>Run</p>
                    </button>
                    <button className={active === 'ride' ? 'highlight' : null} onClick={this.handleRide}>
                        <span className='icon-ride'></span>
                        <p >Ride</p>
                    </button>
                    <button className={active === 'walk' ? 'highlight' : null} onClick={this.handleWalk}>
                        <span className='icon-walk'></span>
                        <p >Walk</p>
                    </button>
                    <button className={active === 'hike' ? 'highlight' : null} onClick={this.handleHike}>
                        <span className='icon-hike'></span>
                        <p >Hike</p>
                    </button>
                    <button className={active === 'distance' ? 'highlight' : null} onClick={this.handleDistance}>
                        <span className='icon-distance'></span>
                        <p >Distance</p>
                    </button>
                </div>
            </div>
        )
    }
}

export default Categories;