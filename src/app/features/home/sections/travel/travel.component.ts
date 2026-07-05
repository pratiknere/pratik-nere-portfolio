import { Component } from '@angular/core';

@Component({
  selector: 'app-travel',
  standalone: true,
  templateUrl: './travel.component.html',
  styleUrl: './travel.component.scss',
})
export class TravelComponent {
  destinations = [
    { name: 'Lonavala', type: 'Bike Ride', emoji: '🏔️', desc: 'Weekend escape through the Sahyadris. Rain-soaked roads and misty valleys.', color: '#22c55e' },
    { name: 'Goa',       type: 'Beach Trip', emoji: '🏖️', desc: 'Sun, sand and the freedom of open coastlines. Best sunset in India.', color: '#f59e0b' },
    { name: 'Pune',      type: 'City Ride',  emoji: '🏙️', desc: 'My home city. Every corner has a memory — from college to career.', color: '#6c63ff' },
    { name: 'Mahabaleshwar', type: 'Hill Station', emoji: '🌿', desc: 'Strawberry farms and panoramic valley views. Nature\'s way of resetting.', color: '#ff6584' },
    { name: 'Mumbai',    type: 'Metro Trip', emoji: '🌆', desc: 'The city that never sleeps. Energy, chaos, and street food at 2am.', color: '#2496ed' },
    { name: 'Next Destination →', type: 'TBD', emoji: '🗺️', desc: 'Always planning the next ride. The best journeys are still ahead.', color: '#a855f7' },
  ];

  bikeStats = [
    { label: 'Total KMs',    value: '5000+' },
    { label: 'Rides Done',   value: '50+'   },
    { label: 'States Visited', value: '4+'  },
    { label: 'Bike',         value: 'Pulsar' },
  ];
}
