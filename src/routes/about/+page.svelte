<script>
  import Stats from '$lib/components/About/Stats.svelte';
  import StdFromSide from '$lib/components/StdFromSide.svelte';
  import TopBanner from '$lib/components/TopBanner.svelte';
</script>
<title>UCalgary Baja - About</title>
<TopBanner
	titleText="About Us"
	imgUrl="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914208/IMG20240517082914_vuhtt1.jpg"
/>
<Stats/>
<StdFromSide backgroundColour="--BajaBlack">
<section class="about-section">
  <div class="section-block">
    <div class="text-content">
      <h2>Our Mission</h2>
      <p>
        UCalgary Baja is a student organization that allows students to
        design, build, and race an off-road vehicle to participate in the
        Baja SAE competition organized by the Society of Automotive
        Engineers (SAE) every year.
      </p>
      <p>
        Our members are given opportunities to gain hands-on experience
        working on the car, which allows them to both learn new skills and
        techniques, such as using Solidworks, Ansys, machining, and
        welding, as well as utilizing knowledge learned from classrooms.
        This is done with practical projects, allowing members to build
        skills and knowledge that employers are looking for.
      </p>
    </div>

    <img
      src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914383/IMG-20230521-WA0004_lzabyt.jpg"
      alt="Car without body panels"
    />
  </div>

  <div class="section-block">
    <img
      src="https://res.cloudinary.com/dpgrgsh7g/image/upload/v1755914532/20240428_105011_emgwkv.jpg"
      alt="Baja Car driving down track"
    />
    <div class="text-content">
      <h2>The Competition</h2>
      <p>
        Every year, we take our car to the United States to compete
        against other teams from all across the globe. Teams from
        universities design, build, and race these vehicles capable of
        going through a series of rough courses. In addition, teams
        discuss their findings, such as cost reports and design choices.
        All of this is done in a series of dynamic and static events. On
        top of this, we also get the chance to connect with students and
        sponsors from all over the world.
      </p>
    </div>
  </div>

  <div class="competitions">
    <div class="competition-block">
      <h2>Static Events</h2>
      <p>
        Static events are where the whole team steps away from building
        the car and takes a look at the professional and analytical aspect
        of the team. The business presentation, cost event, and technical
        inspection are all events where we show real-world understanding
        of engineering, manufacturing, and business decisions. This is
        done through presentations and tests before the race.
      </p>
    </div>
    <div class="competition-block">
      <h2>Dynamic Events</h2>
      <p>
        Dynamic events put the car to the test, each one targeting a
        specific aspect of its capability. Acceleration, sled pull, hill
        climb and maneuverability are all events that compare our
        performance against other teams. After that, we compete in the
        endurance event, a four-hour race filled with many obstacles to
        see how many laps each car can complete. This combines all the
        factors from previous events, on top of the reliability of our
        car.
      </p>
    </div>
  </div>
</section>
</StdFromSide>

<style>
  /* General Section Styling */
  .about-section {
    display: flex;
    flex-direction: column;
    padding: 4svh 2svw;
    justify-content: center;
    align-items: center;
    background-color: var(--BajaBlack);
    color: white;
    font-size: larger;
  }
  .about-section p {
    margin: 1.5svh 0;
  }
  .about-section h2 {
    padding-bottom: 0.5svh;
    font-size: 36px;
    margin-bottom: 2svh;
    border-bottom: solid 3px white;
  }

  /* Section Layout */
  .section-block {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    column-gap: 2svw;
    padding: 2svh 2svw;
  }
  .section-block img {
    width: 400px;
    aspect-ratio: 1;
    border-radius: 1rem;
    object-fit: cover;
  }
  .text-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0 1svw;
    max-width: 800px;
  }

  /* Competitions */
  .competitions {
    display: flex;
    row-gap: 2svh;
    width: 100%;
    margin-top: 2svh;
    column-gap: 2svw;
  }
  .competitions h2 {
    text-align: center;
  }
  .competition-block {
    margin: 0 auto;
  }

  /* Responsive */
  @media only screen and (max-width: 800px) {
    .section-block img {
      width: 300px;
    }
  }
</style>