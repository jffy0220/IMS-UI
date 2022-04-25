const { default: UserDetailsHeader } = require("./util/UserDetailsHeader")
const { default: UserInfo } = require("./util/UserInfo")
const { default: UserLog } = require("./util/UserLog")


const UserDetails = () => {
    return (
        <>
            <UserDetailsHeader />
            <UserInfo />
            <UserLog />
        </>
    )
}

export default UserDetails