import "./widgetLg.scss";
import {useContext} from "react";
import {UserContext} from "../../context/userContext/UserContext"
export default function WidgetLg() {
    const {users} = useContext(UserContext)
    const Button = ({type}) => {
        return <button className={
            "widgetLgButton " + type
        }>
            {type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">User Status</h3>
            <table className="widgetLgTable">
                <tbody>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">User Name</th>
                        <th className="widgetLgTh">Created At</th>
                        <th className="widgetLgTh">Updated At</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    {
                    users.map((user, index) => {
                        return (
                            <tr className="widgetLgTr"
                                key={
                                    user.index
                            }>
                                <td className="widgetLgUser">
                                    <img src={
                                            user.profilePic
                                        }
                                        alt=""
                                        className="widgetLgImg"/>
                                    <span className="widgetLgName">
                                        {
                                        user.username
                                    }</span>
                                </td>
                                <td className="widgetLgDate">
                                    {
                                    user.createdAt.slice(10)
                                }</td>
                                <td className="widgetLgAmount">
                                    {
                                    user.updatedAt.slice(10)
                                }</td>
                                {
                                user.isAdmin ? (
                                    <td className="widgetLgStatus">
                                        <Button type="Admin"/>
                                    </td>
                                ) : (
                                    <td className="widgetLgStatus">
                                        <Button type="Regular"/>
                                    </td>
                                )
                            }</tr>
                        )
                    })
                }</tbody>
            </table>
        </div>
    );
}
