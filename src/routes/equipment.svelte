<script>
  import Header from "../components/Header.svelte";
  import Tab from "../components/Tab.svelte";
  import List from "../components/List.svelte";
  import Button from "../components/Button.svelte";
  import Footer from "../components/Footer.svelte";
  import {
    handleEquipmentClick,
    isHardwareClicked,
    isSoftwareClicked,
    handleHardwareClick,
    handleSoftwareClick
  } from "../components/stores.js";
  import { onMount } from "svelte";

  onMount(() => {
    handleEquipmentClick();
  });

  $: equipmentTab = [
    {
      title: "Hardware",
      function: handleHardwareClick,
      variable: $isHardwareClicked
    },
    {
      title: "Software",
      function: handleSoftwareClick,
      variable: $isSoftwareClicked
    }
  ];

  let hardwareList = [
    { open: false, name: "Computer", content: "— Mac Pro 5.1" },
    {
      open: false,
      name: "Audio Interface",
      content: "— UAD Apollo 8 Quad Silver"
    },
    {
      open: false,
      name: "Speakers",
      content:
        "— ADAM S3V (pair)<br>— Neumann KH 120 A (pair)<br>— Avantone Mixcube"
    },
    {
      open: false,
      name: "Monitor Controller",
      content: "— SPL Model 2381"
    },
    {
      open: false,
      name: "Microphones",
      content:
        "— Neumann TLM 103<br>— Neumann KM 184 (pair)<br>— AKG C414 XLS<br>— Bluebird<br>— Shure SM57<br>— Yeti Blue Digital Mic"
    },
    {
      open: false,
      name: "Compressors",
      content: "— AnaMod 670 Stereo Compressor<br>— EL8 Distressor"
    },
    {
      open: false,
      name: "Preamps",
      content: "— Apollo preamps [x4]<br>— Scarlett OctoPre preamps [x8]"
    },
    {
      open: false,
      name: "Spectrum Analyzer",
      content: "— Audioscope Model 2813-E"
    },
    {
      open: false,
      name: "Control Surface",
      content: "— Avid Artist Mix Controller"
    },
    {
      open: false,
      name: "MIDI Keyboard",
      content: "— AKAI MPK49"
    },
    {
      open: false,
      name: "Headphones",
      content:
        "— Beyerdynamic DT 770 Pro<br>— Beyerdynamic DT 880 Pro<br>— Sony MDR-7506<br>— AKG K 272 HD"
    },
    {
      open: false,
      name: "Amps",
      content: "— Vox AC15H<br>— Vox V212C"
    },
    {
      open: false,
      name: "DI Box",
      content: "— Radial Engineering J48 Active (Mono)"
    },
    {
      open: false,
      name: "Reamp Box",
      content: "— Radial Engineering X-Amp Active (Dual Output)"
    },
    {
      open: false,
      name: "Pedals",
      content:
        "— Boss RC-30 Dual Track Looper<br>— Boss TR-2 Tremolo<br>— Boss BD-2 Blues Driver<br>— TC Electronic Flashback Delay and Looper<br>— Line6 DL4 Delay Modeller<br>— Ibanez TS9 Tube Screamer<br>— Dunlop Crybaby GCB95 Wah-Wah"
    },
    {
      open: false,
      name: "Synthesizer",
      content: "— Arturia MicroBrute"
    },
    {
      open: false,
      name: "Step Sequencer",
      content: "— KORG SQ-1"
    },
    {
      open: false,
      name: "Modular",
      content:
        "— A-110-1 standard VCO (Doepfer)<br>— Mult (Make Noise)<br>— Braids (Mutable Instruments)<br>— A-124 wasp filter (Doepfer)<br>— A-130 Linear VCA (Doepfer)<br>— A-132-3 dual linear/exponential VCA (Doepfer)<br>— A-180-2 Multiples (Doepfer)<br>— A-140-1 ADSR Envelope Generator [x3] (Doepfer)<br>— A-180-1 Multiples (Doepfer)<br>— A-138 Mixer (Doepfer)<br>— R-51 Vacuum Tube VCA/Distortion (Metasonix)<br>— Plasma Drive (Erica Synths)<br>— R-54 Supermodule VCO/VCF (Metasonix)<br>— Wogglebug (Make Noise)<br>— MIDI to Trigger module (Erica Synths)<br>— Audio I/O (Intellijel)"
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
        "— Antares: Auto-Key | Auto-Tune Pro<br>— Cableguys: Half-Time | TimeShaper<br>— Camel Audio: CamelCrusher<br>— Celemony: Melodyne 4 Studio<br>— Fabfilter: Pro-Q 2<br>— Illformed: Glitch 2<br>— iZotope: Music Production Suite<br>— Lexicon: LXPChamber | LXPHall | LXPPlate | LXRRoom<br>— Native Instruments: Komplete 12 Ultimate<br>— oeksound: soothe<br>— Process.Audio: Sugar<br>— Plugin Alliance: bx_cleansweep V2 | bx_rockrack V3 Player | bx_solo | bx_subfilter | dearVR Pro | elysia niveau filter | Schoeps Double MS | SPL Free Ranger<br>— Slate Digital: All Access Pass<br>— Softube: Saturation Knob<br>— Sonarworks: Reference 4<br>— Sonnox: Oxford Dynamic EQ | Oxford Inflator | Oxford Limiter<br>— Soundtoys: Soundtoys 5<br>— Valhalla DSP: ValhallaVintageVerb<br>— Waves: Aphex Vintage Exciter | API 550 | Butch Vig Vocals | Chris Lord-Alge Signature | dbx 160 Compressor/Limiter | Horizon | J37 Tape | Linear Phase Multiband Compressor | Nx | SSL G-Equalizer/Master Buss Compressor | StudioRack | Waves Tune Real-Time<br>— Xfer Records: Serum | Cthulhu"
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

</style>

<Header />
<Tab tab={equipmentTab} />
<ul>
  {#if $isHardwareClicked}
    {#each hardwareList as list}
      <List {list} on:click={() => handleHardwareListToggle(list)} />
    {/each}
  {:else}
    {#each softwareList as list}
      <List {list} on:click={() => handleSoftwareListToggle(list)} />
    {/each}
  {/if}

</ul>
<Button button={pdfButton} />
<Footer />
