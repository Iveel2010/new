import Link from "next/link";
import { useRouter } from "next/navigation";
const Hi = (props) => {
  const ko = props.ko;
  let router = useRouter();
  return (
    <div className="personContainer">
      <img
        onClick={() => router.push(`/${ko.id}`)}
        className="img"
        src={ko.social_image}
        alt=""
      />

      <div>
        <Link href={ko.url}>
          <button class="btn"> Technology</button>
        </Link>

        <div className="ug">{ko.title}</div>

        <div style={{ fontSize: "16px" }}>{ko.description}</div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "450px",
            marginTop: "20px",
          }}
        >
          <div className="go">
            <img className="img2" src={ko.user.profile_image} alt="" />
            <div className="personName">{ko.user.name}</div>
          </div>
          <div className="go">{ko.readable_publish_date}</div>
        </div>
      </div>
    </div>
  );
};
export default Hi;
