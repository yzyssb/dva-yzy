import React, { Component } from 'react'
// import styles from './MainLayout.css'
import Header from './Header'
import LeftMenu from './LeftMenu'
import layout from './layout.less';

class MainLayout extends Component {
    render() {
        const { children, location } = this.props
        return (
            // <div className={styles.normal}>
            //     <Header />
            //     <div className={styles.content}>
            //         <div className={styles.main}>
            //             {children}
            //         </div>
            //     </div>
            // </div>
            <div className={layout.html}>
                <Header location={location} />
                <div className={layout.logo}>1+1=2?</div>
                <div className={layout.body}>
                    <LeftMenu />
                    <div className={layout.main}>
                        <div className={layout.child}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainLayout