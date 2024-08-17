import React from 'react';
import styles from './UserInfoComponent.module.css';
import Image from "next/image";

const UserInfoComponent = () => {
    return (
        <div className={styles.user_info}>
            <Image
                src="/images/user.png"
                alt="User Image"
                className={styles.user_image}
                width={40}
                height={40}
            />
            <div className={styles.user_info_name}>User Name</div>
        </div>
    );
};

export default UserInfoComponent;
