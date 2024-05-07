import React from 'react'
import "./Directorates.css"
import OptimizedImage from '../../../components/OptimizedImage/OptimizedImage'
import { Link, useLocation } from 'react-router-dom'

const Directorates = () => {

  const slug = useLocation().state?.slug || directoratesData[0].slug
  const directorate = directoratesData.filter((item) => item.slug === slug)[0]

  const description = { __html: directorate.description }
  return (
    <div className="directorates-page">
      <div className="container-fluid">
        <div className="text-col">
          <span>Directorate of</span>
          <h4 className='title'>{directorate.title}</h4>
          <div className="description" dangerouslySetInnerHTML={description}></div>
        </div>
        <OptimizedImage src={directorate.imgUrl} className="image" />

        <Link to="/about-us" className='learn-more'>Learn more about our other directorates</Link>
      </div>
    </div>
  )
}


export const directoratesData = [
  {
    title: 'Prayer',
    slug: 'prayer',
    description: `
    <p><em>"And I will pray the Father, and He will give you another Helper, that He may abide with you forever" John 14:16 NKJV.</em></p>
    <p>Welcome to the prayer department of Soteria Church. We are the Church that cares, and we are also a church deeply and intentionally committed to prayer. The call to prayer is the Father's invitation to enter His presence. Prayer allows us to come boldly into the throne room of the Father to receive illumination and advanced knowledge to pray, as we ought to. Prayer is our ability to stand in the gap and intercede for nations, communities, churches, leaders, families, and ordinary people so that the will of God can be enforced over and above the plans of the enemy. You are gladly welcome to join us in our daily dawn prayer meetings, weekly Friday meetings, or unique prayer retreats.</p>
    <p><em>"Let us, therefore, come boldly to the throne of grace, that we may obtain mercy and find grace to help in time of need." Hebrews 4:16 NKJV.</em></p>
    `,
    imgUrl: '/assets/pray.jpg'
  },

  {
    title: 'Evangelism and Community Engagement',
    slug: 'community',
    description:
      `
    <p>As a church, our mandate is:</p>
    <blockquote><em>"A Great COMMITMENT to the GREAT COMMANDMENT (Mark 12:30-31) and the GREAT COMMISSION (Matthew 28:19-20, Mark 16:15-20)."</em></blockquote>
    <p>Our team functions to translate this mandate to spread the LOVE of GOD in our communities. We do that by making sure that within our local community in Maryland, we reach the unreached, partnering with the Holy Spirit in obedience to the Father’s desire that none should perish but that all come to a saving knowledge of Jesus Christ and surrender to Him as Lord. We also concern ourselves with feeding the body by providing resources to feed our neighbors in the local community, inclusive but not limited to members of our local church alone.</p>
    `,
    imgUrl: '/assets/pray.jpg'
  },


  {
    title: 'First Impression',
    slug: 'first-impression',
    description: `
      <p>Tasked with creating a welcoming, warm, and friendly atmosphere for all members and visitors of Soteria Church. Starting right from the parking lot until we place you in a comfortable seat in the auditorium, our team of Field Marshalls (Parking Lot Attendants), Greeters, and Ushers are committed to making you feel right at home in your Father&rsquo;s house. Our team of Sanctuary Keepers make sure that our services are held in clean and compliantly safe environments.</p>
    `,
  },
  {
    title: 'Retention and Membership',
    slug: 'retention-membership',
    description: `
    <p>To ensure that we fulfill our vision of becoming and then raising devoted disciples of Jesus Christ, we create programs that are designed to transform non-committed visitors to dedicated members, who understand that we all are called to serve in the Kingdom of God. We do this by teaching our vision and core values all from a totally scriptural basis, so everyone who is a member understands who we are, what we believe, and why we do things the way we do. Discipleship is intentional and that&rsquo;s the other thing that we do, we create platforms and pathways to grow and deeply ground our members, so they are planted in the Word of God.</p>
    `,
  },
  {
    title: 'Worship and Creative Arts',
    slug: 'worship-creative-arts',
    description: `
      <p>One glance at the imagery in the book of Revelations, or the heartfelt language in the book of the Psalms, reveals the grandeur of words, gestures, actions, music, dance, and all forms of creativity as instruments of true worship to God. Our team is responsible for curating a corporate culture and experience of deep, expressive, and sincere worship that glorifies our God using the gifts and talents He has given us in the form of music from Tehila our Music team, dance from Selah our Dance team, and drama from Charis our Drama team.</p>
    `,
  },
  {
    title: 'Media',
    slug: 'media',
    description: `
    <p>Comprised of two units, Audio and Visual, our task is to enhance the “seeing” and the “hearing” experience for all worshippers in our meetings. As the scriptures say, “faith comes by hearing and hearing by the Word of God”, we understand that for hearing to happen, voices need to be amplified and audible, images need to be crisp and engaging, and that’s what we do, we make hearing and seeing both possible and pleasant. For hearing and hearing again to happen, what was heard the first time must be available to be heard again, so we capture in both audio and visual formats our events for future reference.</p>

    `,
  },
  {
    title: 'Finance (Chayil)',
    slug: 'finance',
    description: `
    <p>Drawn from the Hebrew word &lsquo;Chayil&rsquo; which can be translated to mean &ldquo;wealth&rdquo;, &ldquo;efficiency&rdquo;, and &ldquo;strength&rdquo; in English, our mission is to be and to teach God's people to be effective stewards of financial and material resources to the glory of God. Our goal is to utilize the power of God, to Make, Manage, Multiply, and Minister God's resources for His glory.</p>
    `,
  },
  {
    title: 'Operations and Management Systems',
    slug: 'operations',
    description: `
    <p>We oversee and manage staff and volunteers concerned with logistics and operations inclusive of but not limited to Administrative Officers (non-pastoral), facility and property custodians, van drivers, and the employment and immigration services team. We oversee the security of church premises and properties and ensure security contracts with security companies are updated and executed.</p>

    `,
  },
  {
    title: 'Missions, Church Planting, and International Relations',
    slug: 'missions',
    description: `
      <p>As a Church, we might be in Baltimore County Maryland, but we understand and intentionally pursue a Global Ministry Focus. We are the arm of Soteria Church in charge of external mission affairs, global humanitarian activities, and Missionaries Supports. We work with well-established partners globally to provide financial and material resources to individuals and organiza
    `,
  },
  {
    title: 'So-KK (Soteria King\’s Kids): ',
    slug: 'so-kk',
    description: `
    <p>We recognize that God works on and in the hearts of little ones. Thus, we seize every opportunity knowing that we can evangelize and disciple our children for Christ and nurture them towards spiritual growth and maturity while they develop a strong moral character from a young age. We believe that our children's church is sacred because it is a place where attitudes and heart values are being birthed and molded. Our desire is to always create the opportunity and the right atmosphere for that to happen.</p>
    <p>Divided into 3 groups; KINDLE (under 5 years), IGNITE (5-9 years) and BLAZE (10-14 years), we train their HEARTS, HEADS, and HANDS so they can be all that God has made them to be.</p>

    `,
  },
  {
    title: 'Catalyst',
    slug: 'catalyst',
    description: `
    <p>Catalyst is the Youth Ministry of Soteria Church. Our group has a wide range of vibrant Jesus-lovers all the way from High School to early/mid-career individuals. Our mission is to truly be catalysts for Christ. To be people who will enforce the Kingdom of God in all our spheres, while remaining steadfast and grounded in the Word of God, despite our ever-changing world.</p>
    `,
  },
  {
    title: 'Family Life and Marriage Enrichment (FLAME)',
    slug: 'flame',
    description: `
    <p>Our mission is to ignite marriages and families to be devotedly rooted and built up on biblical truths and principles. By providing educational pre-marital counseling sessions, relationship seminars, and various family-life events, our goal is to raise, renew, and reinforce healthy marriages, healthy families, and empower parents and guardians to nurture champion children who are devoted disciples and transformational servant-leaders on fire for Christ.</p>
    `,
  },
  {
    title: 'SOTERIA CARE GROUP (SoCARE)',
    slug: 'socare',
    description: `
    <p>Founded on the principles from the Acts 2 church, SoCARE is the Soteria Church life group system which oversees our small groups. SoCITH (Soteria Church in the Home) is our home-based small group system, that allows members, visitors, and their neighbors to gather locally, fellowship and study sound biblical principles. SoLIGS (Soteria Life Groups) is made up of our cross-sectional small groups centered around common themes including but not limited to careers and professional pursuits, age, and life interests that meet and interact around those interests. These groups are designed to encourage discipleship and spiritual growth through fellowship and accountability.</p>
    `,
  },
];

export default Directorates