const falconNine = {
  flight_number: 65,
  mission_name: 'Telstar 19V',
  mission_id: ['F4F83DE'],
  launch_year: '2018',
  launch_date_unix: 1532238600,
  is_tentative: false,
  tbd: false,
  launch_window: 7200,
  rocket: {
    rocket_id: 'falcon9',
    rocket_name: 'Falcon 9',
    first_stage: {
      cores: [
        {
          core_serial: 'B1047',
          flight: 1,
          reused: false,
          land_success: true,
        },
      ],
    },
    second_stage: {
      payloads: [
        {
          payload_id: 'Telstar 19V',
          norad_id: [43562],
          reused: false,
          customers: ['Telesat'],
          nationality: 'Canada',
          manufacturer: 'SSL',
          payload_type: 'Satellite',
          payload_mass_kg: 7076,
          payload_mass_lbs: 15600,
        },
      ],
    },
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ship: null,
    },
  },
  ships: ['GOPURSUIT', 'GOQUEST', 'HAWK', 'OCISLY'],
  launch_site: {
    site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40',
  },
  launch_success: true,
  links: {
    mission_patch: 'https://images2.imgbox.com/c5/53/5jklZkPz_o.png',
    mission_patch_small: 'https://images2.imgbox.com/12/7c/NiniYxoh_o.png',
    flickr_images: [
      'https://farm1.staticflickr.com/856/28684550147_49802752b3_o.jpg',
      'https://farm1.staticflickr.com/927/28684552447_956a9744f1_o.jpg',
      'https://farm2.staticflickr.com/1828/29700007298_8ac5891d2c_o.jpg',
      'https://farm1.staticflickr.com/914/29700004918_31ed7b73ef_o.jpg',
      'https://farm1.staticflickr.com/844/29700002748_3047e50a0a_o.jpg',
      'https://farm2.staticflickr.com/1786/29700000688_2514cd3cbb_o.jpg',
    ],
  },
  details:
    'SSL-manufactured communications satellite intended to be placed at 63° West over the Americas. At 7,075 kg, it became the heaviest commercial communications satellite ever launched.',
  upcoming: false,
  static_fire_date_unix: 1531947600,
};

const falconHeavy = {
  flight_number: 55,
  mission_name: 'Falcon Heavy Test Flight',
  mission_id: [],
  launch_year: '2018',
  launch_date_unix: 1517949900,
  is_tentative: false,
  tbd: false,
  launch_window: 9000,
  rocket: {
    rocket_id: 'falconheavy',
    rocket_name: 'Falcon Heavy',
    first_stage: {
      cores: [
        {
          core_serial: 'B1033',
          flight: 1,
          reused: false,
          land_success: false,
        },
        {
          core_serial: 'B1025',
          flight: 2,
          reused: true,
          land_success: true,
        },
        {
          core_serial: 'B1023',
          flight: 2,
          reused: true,
          land_success: true,
        },
      ],
    },
    second_stage: {
      block: 3,
      payloads: [
        {
          payload_id: 'Tesla Roadster',
          norad_id: [43205],
          reused: false,
          customers: ['SpaceX'],
          nationality: 'United States',
          manufacturer: 'Tesla',
          payload_type: 'Satellite',
          payload_mass_kg: 1350,
          payload_mass_lbs: 2976.2,
        },
      ],
    },
    fairings: {
      reused: false,
      recovery_attempt: false,
      recovered: false,
      ship: null,
    },
  },
  ships: ['GOSEARCHER', 'HAWK', 'OCISLY'],
  launch_site: {
    site_id: 'ksc_lc_39a',
    site_name: 'KSC LC 39A',
    site_name_long: 'Kennedy Space Center Historic Launch Complex 39A',
  },
  launch_success: true,
  links: {
    mission_patch: 'https://images2.imgbox.com/33/1a/ujrnfkna_o.png',
    mission_patch_small: 'https://images2.imgbox.com/22/5f/jAAULKc3_o.png',
    flickr_images: [
      'https://farm5.staticflickr.com/4745/40110304192_b0165b7785_o.jpg',
      'https://farm5.staticflickr.com/4676/40110297852_6173e5cae6_o.jpg',
      'https://farm5.staticflickr.com/4615/40143096241_0324643b5e_o.jpg',
      'https://farm5.staticflickr.com/4702/40110298232_4e9c412936_o.jpg',
      'https://farm5.staticflickr.com/4610/39337245575_41d760caef_o.jpg',
      'https://farm5.staticflickr.com/4654/25254688767_59603ff06c_o.jpg',
      'https://farm5.staticflickr.com/4627/40126462801_d54b4f00be_o.jpg',
      'https://farm5.staticflickr.com/4760/40126462231_cdf00ef431_o.jpg',
      'https://farm5.staticflickr.com/4655/40202121122_5d29cfe2ac_o.jpg',
      'https://farm5.staticflickr.com/4631/39337245145_5f5630a66a_o.jpg',
      'https://farm5.staticflickr.com/4650/40126461851_14b93ec9d7_o.jpg',
      'https://farm5.staticflickr.com/4711/40126461411_b1ed283d45_o.jpg',
      'https://farm5.staticflickr.com/4696/40126460511_7b5cc64871_o.jpg',
      'https://farm5.staticflickr.com/4589/38583831555_9ae89f5c10_o.jpg',
      'https://farm5.staticflickr.com/4682/38583829815_e01509d1a7_o.jpg',
      'https://farm5.staticflickr.com/4731/39225582801_80594d5d91_o.jpg',
      'https://farm5.staticflickr.com/4641/39225582421_7aa0c65851_o.jpg',
      'https://farm5.staticflickr.com/4643/27449864329_d2424bc280_o.jpg',
      'https://farm5.staticflickr.com/4681/39225582171_137a4c75e7_o.jpg',
      'https://farm5.staticflickr.com/4644/39225582351_ac6aba2533_o.jpg',
      'https://farm5.staticflickr.com/4587/27449863849_709e135a98_o.jpg',
    ],
  },
  details:
    'The launch was a success, and the side boosters landed simultaneously at adjacent ground pads. Drone ship landing of the central core failed. Final burn to heliocentric mars-earth orbit was successful after the second stage and payload passed through the Van Allen belts.',
  upcoming: false,
  static_fire_date_unix: 1516815000,
};