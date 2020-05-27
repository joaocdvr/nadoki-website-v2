<script>
  import {
    scrollYPosition,
    isEquipmentHardwareClicked,
    isEquipmentSoftwareClicked,
    handleHardwareSubmenuClick,
    handleSoftwareSubmenuClick
  } from "../utensils/stores.js";
  import Header from "../components/Header.svelte";
  import Tab from "../components/Tab.svelte";
  import List from "../components/List.svelte";
  import Button from "../components/Button.svelte";
  import Footer from "../components/Footer.svelte";

  $: equipmentTab = [
    {
      title: "HARDWARE",
      function: handleHardwareSubmenuClick,
      variable: $isEquipmentHardwareClicked,
      justTwo: true
    },
    {
      title: "SOFTWARE",
      function: handleSoftwareSubmenuClick,
      variable: $isEquipmentSoftwareClicked,
      justTwo: true
    }
  ];

  let hardwareList = [
    {
      open: false,
      name: "Monitoring System",
      content:
        "Speakers<br>— ADAM S3V (pair)<br>— Neumann KH 120 A (pair)<br>— Avantone Mixcube (mono)<br><br>Heaphones<br>— Beyerdynamic DT 770 Pro<br>— Beyerdynamic DT 880 Pro<br>— Sony MDR-7506<br>— AKG K 272 HD<br><br>Monitor Controller<br>— SPL Model 2381"
    },
    {
      open: false,
      name: "Microphones",
      content:
        "Dynamic<br>— Shure SM57<br>— SM7<br>— AKG P4 (x4)<br>— AKG P2<br><br>Condenser<br>— AKG C414 XLS<br>— Neumann TLM 103 Studio Set<br>— Neumann KM 184 (pair)<br>— Bluebird<br>— Yeti Blue Digital Mic<br>— AKG P17 (pair)"
    },
    {
      open: false,
      name: "Ourboard",
      content:
        "Dynamics<br>— EL8 Distressor<br>— AnaMod 670 Stereo Compressor<br>— SSL Fusion<br><br>EQ<br>— Dangerous BAX EQ<br><br>Preamps<br>— Neve 1073SPX<br>— Apollo unison-enabled preamp (x4)<br>— Scarlett preamp (x8)<br><br>DI<br>— Radial Engineering J48 Active (Mono)<br><br>Converters<br>— Universal Audio Apollo Quad (silver)<br>— Focusrite Scarlett 18i20<br><br>Miscellaneous<br>— Audioscope Model 2813-E<br>— Radial Engineering X-Amp Active (dual output)<br>— Apogee BigBen Master Clock<br>— TC Electronic Clarity M Stereo"
    },
    {
      open: false,
      name: "Amplifier",
      content: "— Vox AC15H<br>— Vox V212C"
    },
    {
      open: false,
      name: "Pedals",
      content:
        "Time based<br>— Boss RC-30 Dual Track Looper<br>— TC Electronic Flashback Delay and Looper<br>— Line6 DL4 Delay Modeller<br><br>Modulation<br>— Boss TR-2 Tremolo<br><br>Dynamic<br>— Ibanez TS9 Tube Screamer<br>— Dunlop Crybaby GCB95 Wah-Wah<br>— Boss BD-2 Blues Driver"
    },
    {
      open: false,
      name: "Instruments",
      content:
        "Stringed Instrument<br>— Gibson SG Guitar<br>— Fender Telecaster Vintage 52’ Guitar<br>— Fender Stratocaster 1988<br>— Little Martin Acoustic Guitar<br>— Epiphone MM-50E Professional Mandolin<br>— Ukulele<br><br>Keys<br>— Arturia MicroBrute<br>— AKAI MPK49<br><br>Step Sequencer<br>— KORG SQ-1<br><br>Modular<br>— A-110-1 standard VCO (Doepfer)<br>— Mult (Make Noise)<br>— Braids (Mutable Instruments)<br>— A-124 wasp filter (Doepfer)<br>— A-130 Linear VCA (Doepfer)<br>— A-132-3 dual linear/exponential VCA (Doepfer)<br>— A-180-2 Multiples (Doepfer)<br>— 3x A-140-1 ADSR Envelope Generator (Doepfer)<br>— A-180-1 Multiples (Doepfer)<br>— A-138 Mixer (Doepfer)<br>— R-51 Vacuum Tube VCA/Distortion (Metasonix)<br>— Plasma Drive (Erica Synths)<br>— R-54 Supermodule VCO/VCF (Metasonix)<br>— Wogglebug (Make Noise)<br>— MIDI to Trigger module (Erica Synths)<br>— Audio I/O (Intellijel)"
    },
    {
      open: false,
      name: "Controller",
      content: "— Avid Artist Mix Controller"
    }
  ];

  function handleHardwareListToggle(x) {
    hardwareList = hardwareList.map(list => {
      if (list === x) {
        return {
          name: list.name,
          content: list.content,
          open: !list.open
        };
      }
      return list;
    });
  }

  let softwareList = [
    {
      open: false,
      name: "DAWs",
      content: "— Ableton 9 & 10<br>— Pro Tools 2019.6<br>— Logic Pro X"
    },
    {
      open: false,
      name: "Plug-ins",
      content:
        "Antares<br>— Auto-Key<br>— Auto-Tune Pro<br><br>Cableguys<br>— Half-Time<br>— TimeShaper<br><br>Camel Audio<br>— CamelCrusher<br><br>Celemony<br>— Melodyne 4 Studio<br><br>Fabfilter<br>— Pro-Q 2<br>— Pro-Q 3<br>— Pro-L 2<br>— Pro-R<br>— Pro-C 2<br>— Pro-MB<br>— Pro-DS<br>— Pro-G<br><br>Illformed<br>— Glitch 2<br><br>iZotope<br>— Music Production Suite<br><br>Lexicon<br>— LXPChamber<br>— LXPHall<br>— LXPPlate<br>— LXRRoom<br><br>Native Instruments<br>— Komplete 12 Ultimate<br><br>oeksound<br>— soothe<br><br>Process.Audio<br>— Sugar<br><br>Plugin Alliance<br>— bx_cleansweep V2<br>— bx_rockrack V3 Player<br>— bx_solo<br>— bx_subfilter<br>— dearVR Pro<br>— elysia niveau filter<br>— Schoeps Double MS<br>— SPL Free Ranger<br><br>Slate Digital<br>— All Access Pass<br><br>Softube<br>— Saturation Knob<br><br>Sonarworks<br>— Reference 4<br><br>Sonnox<br>— Oxford Dynamic EQ<br>— Oxford Inflator<br>— Oxford Limiter<br><br>Soundtoys<br>— Soundtoys 5<br><br>Valhalla DSP<br>— ValhallaVintageVerb<br><br>Waves<br>— Aphex Vintage Exciter<br>— API 550<br>— Butch Vig Vocals<br>— Chris Lord-Alge Signature<br>— dbx 160 Compressor/Limiter<br>— Horizon<br>— J37 Tape<br>— Linear Phase Multiband Compressor<br>— Nx<br>— SSL G-Equalizer/Master Buss Compressor<br>— StudioRack<br>— Waves Tune Real-Time<br><br>Xfer Records<br>— Serum<br>— Cthulhu"
    }
  ];

  function handleSoftwareListToggle(x) {
    softwareList = softwareList.map(list => {
      if (list === x) {
        return {
          name: list.name,
          content: list.content,
          open: !list.open
        };
      }
      return list;
    });
  }

  let pdfButton = {
    text: "PDF VERSION",
    href: "/documents/nadoki_equipment_list.pdf",
    label: "PDF version of the equipment list"
  };
</script>

<style>
  ul {
    padding: 0 1.5rem 2.5rem 1.5rem;
  }
</style>

<div style="transform: translateY({$scrollYPosition * -1}px)">
  <Header variant="equipment" />

  <Tab tab={equipmentTab} />

  <ul>
    {#if $isEquipmentHardwareClicked}
      {#each hardwareList as listItem, i}
        <List
          {listItem}
          {i}
          on:click={() => handleHardwareListToggle(listItem)} />
      {/each}
    {:else}
      {#each softwareList as listItem, i}
        <List
          {listItem}
          {i}
          on:click={() => handleSoftwareListToggle(listItem)} />
      {/each}
    {/if}
  </ul>

  <Button button={pdfButton} />

  <Footer />
</div>
