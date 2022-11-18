import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';
import './home.css'


export default function Home() {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">

    <Sidebar/>
    <Feed/>
    <Rightbar/>
    </div>
    </>
    
  )
}
