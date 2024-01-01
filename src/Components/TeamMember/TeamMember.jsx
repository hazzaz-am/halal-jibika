import MemberCard from "./MemberCard/MemberCard";
import Style from "./TeamMember.module.css";

const TeamMember = () => {
  return (
    <section>
      <div className="container">
      <h3 className={Style.team__heading}>Our Creative Team</h3>
        <div className={Style.member__card__container}>
          <MemberCard
            title={"Manowar"}
            image={
              "https://html.creativegigstf.com/khuj/khuj/images/team/team-9.jpg"
            }
            position={"CEO & Founder"}
          />
          <MemberCard
            title={"Mike Ross"}
            image={
              "https://html.creativegigstf.com/khuj/khuj/images/team/team-7.jpg"
            }
            position={"Art Director"}
          />
          <MemberCard
            title={"Jane Doe"}
            image={
              "https://html.creativegigstf.com/khuj/khuj/images/team/team-8.jpg"
            }
            position={"Designer"}
          />
        </div>
      </div>
    </section>
  );
};

export default TeamMember;
