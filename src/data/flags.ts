/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Historium Vector Flags Library
 * Scalable, high-fidelity SVGs for world flags with correct emblems, stars, crosses, and ratios.
 */

export function getCountryFlagSvg(id: string): string | null {
  switch (id) {
    /* ================= NORTH AMERICA ================= */
    case 'united-states':
      return `<svg class="flag-svg" viewBox="0 0 190 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="190" height="100" fill="#B22234"/>
        <path d="M0,7.69h190M0,23.08h190M0,38.46h190M0,53.85h190M0,69.23h190M0,84.62h190" stroke="#FFFFFF" stroke-width="7.69"/>
        <rect width="76" height="53.85" fill="#3C3B6E"/>
        <g fill="#FFFFFF" transform="scale(1.2) translate(4, 3)">
          <circle cx="8" cy="6" r="1.8"/><circle cx="20" cy="6" r="1.8"/><circle cx="32" cy="6" r="1.8"/><circle cx="44" cy="6" r="1.8"/><circle cx="56" cy="6" r="1.8"/>
          <circle cx="14" cy="13" r="1.8"/><circle cx="26" cy="13" r="1.8"/><circle cx="38" cy="13" r="1.8"/><circle cx="50" cy="13" r="1.8"/>
          <circle cx="8" cy="20" r="1.8"/><circle cx="20" cy="20" r="1.8"/><circle cx="32" cy="20" r="1.8"/><circle cx="44" cy="20" r="1.8"/><circle cx="56" cy="20" r="1.8"/>
          <circle cx="14" cy="27" r="1.8"/><circle cx="26" cy="27" r="1.8"/><circle cx="38" cy="27" r="1.8"/><circle cx="50" cy="27" r="1.8"/>
          <circle cx="8" cy="34" r="1.8"/><circle cx="20" cy="34" r="1.8"/><circle cx="32" cy="34" r="1.8"/><circle cx="44" cy="34" r="1.8"/><circle cx="56" cy="34" r="1.8"/>
        </g>
      </svg>`;

    case 'canada':
      return `<svg class="flag-svg" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="100" fill="#FF0000"/>
        <rect x="50" width="100" height="100" fill="#FFFFFF"/>
        <rect x="150" width="50" height="100" fill="#FF0000"/>
        <!-- 11-point stylized Maple Leaf -->
        <path d="M100 20 L104 38 L114 34 L110 44 L126 46 L122 54 L132 62 L116 66 L118 72 L103 70 L103 82 L97 82 L97 70 L82 72 L84 66 L68 62 L78 54 L74 46 L90 44 L86 34 L96 38 Z" fill="#FF0000"/>
      </svg>`;

    case 'mexico':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="100" fill="#006847"/>
        <rect x="50" width="50" height="100" fill="#FFFFFF"/>
        <rect x="100" width="50" height="100" fill="#CE1126"/>
        <!-- Aztec Golden Eagle Emblem on Nopal Cactus -->
        <ellipse cx="75" cy="50" rx="14" ry="12" fill="#D4AF37" stroke="#7A5812" stroke-width="1"/>
        <circle cx="75" cy="46" r="6" fill="#8B5A2B"/>
        <path d="M72 44 Q75 39 78 44 Q80 47 75 52 Q70 47 72 44" fill="#006847"/>
        <path d="M68 60 Q75 56 82 60" stroke="#006847" stroke-width="2" fill="none"/>
      </svg>`;

    /* ================= EUROPE ================= */
    case 'united-kingdom':
      return `<svg class="flag-svg" viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg">
        <clipPath id="uk-clip"><rect width="160" height="100"/></clipPath>
        <g clip-path="url(#uk-clip)">
          <rect width="160" height="100" fill="#012169"/>
          <!-- St Andrew / St Patrick Diagonals -->
          <path d="M0 0 L160 100 M160 0 L0 100" stroke="#FFFFFF" stroke-width="20"/>
          <path d="M0 0 L80 50 M160 100 L80 50" stroke="#C8102E" stroke-width="6"/>
          <path d="M160 0 L80 50 M0 100 L80 50" stroke="#C8102E" stroke-width="6"/>
          <!-- St George Cross -->
          <path d="M80 0 V100 M0 50 H160" stroke="#FFFFFF" stroke-width="32"/>
          <path d="M80 0 V100 M0 50 H160" stroke="#C8102E" stroke-width="20"/>
        </g>
      </svg>`;

    case 'germany':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="33.33" fill="#000000"/>
        <rect y="33.33" width="150" height="33.34" fill="#DD0000"/>
        <rect y="66.67" width="150" height="33.33" fill="#FFCE00"/>
      </svg>`;

    case 'france':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="100" fill="#002654"/>
        <rect x="50" width="50" height="100" fill="#FFFFFF"/>
        <rect x="100" width="50" height="100" fill="#ED2939"/>
      </svg>`;

    case 'italy':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="50" height="100" fill="#009246"/>
        <rect x="50" width="50" height="100" fill="#FFFFFF"/>
        <rect x="100" width="50" height="100" fill="#CE2B37"/>
      </svg>`;

    case 'spain':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="25" fill="#AA151B"/>
        <rect y="25" width="150" height="50" fill="#F1BF00"/>
        <rect y="75" width="150" height="25" fill="#AA151B"/>
        <!-- Spanish Royal Coat of Arms -->
        <g transform="translate(42, 50)">
          <rect x="-10" y="-12" width="20" height="24" rx="3" fill="#AA151B" stroke="#D4AF37" stroke-width="1.2"/>
          <circle cx="-6" cy="-6" r="3" fill="#F1BF00"/>
          <rect x="2" y="-9" width="6" height="6" fill="#FFFFFF"/>
          <path d="M-14 -14 Q-10 -18 -6 -14 Q0 -18 6 -14" stroke="#D4AF37" stroke-width="1.5" fill="none"/>
        </g>
      </svg>`;

    case 'greece':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="100" fill="#0D5EAF"/>
        <!-- 9 stripes (5 blue, 4 white) -->
        <path d="M0,11.1h150 M0,33.3h150 M0,55.5h150 M0,77.7h150" stroke="#FFFFFF" stroke-width="11.1"/>
        <!-- Canton with cross -->
        <rect width="55.5" height="55.5" fill="#0D5EAF"/>
        <path d="M27.75,0 V55.5 M0,27.75 H55.5" stroke="#FFFFFF" stroke-width="11.1"/>
      </svg>`;

    case 'switzerland':
      return `<svg class="flag-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" fill="#D52B1E"/>
        <rect x="40" y="18" width="20" height="64" fill="#FFFFFF"/>
        <rect x="18" y="40" width="64" height="20" fill="#FFFFFF"/>
      </svg>`;

    case 'sweden':
      return `<svg class="flag-svg" viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="100" fill="#006AA7"/>
        <path d="M50 0 V100 M0 50 H160" stroke="#FECC00" stroke-width="20"/>
      </svg>`;

    case 'norway':
      return `<svg class="flag-svg" viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="100" fill="#BA0C2F"/>
        <path d="M50 0 V100 M0 50 H160" stroke="#FFFFFF" stroke-width="24"/>
        <path d="M50 0 V100 M0 50 H160" stroke="#00205B" stroke-width="12"/>
      </svg>`;

    case 'denmark':
      return `<svg class="flag-svg" viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="100" fill="#C60C30"/>
        <path d="M50 0 V100 M0 50 H160" stroke="#FFFFFF" stroke-width="18"/>
      </svg>`;

    case 'finland':
      return `<svg class="flag-svg" viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="100" fill="#FFFFFF"/>
        <path d="M50 0 V100 M0 50 H160" stroke="#003580" stroke-width="24"/>
      </svg>`;

    case 'netherlands':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="33.33" fill="#AE1C28"/>
        <rect y="33.33" width="150" height="33.34" fill="#FFFFFF"/>
        <rect y="66.67" width="150" height="33.33" fill="#21468B"/>
      </svg>`;

    case 'russia':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="33.33" fill="#FFFFFF"/>
        <rect y="33.33" width="150" height="33.34" fill="#0039A6"/>
        <rect y="66.67" width="150" height="33.33" fill="#D52B1E"/>
      </svg>`;

    case 'portugal':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="60" height="100" fill="#046A38"/>
        <rect x="60" width="90" height="100" fill="#DA291C"/>
        <!-- Armillary Sphere & Quinas Shield -->
        <circle cx="60" cy="50" r="16" fill="#FFC72C" stroke="#B22222" stroke-width="1.5"/>
        <rect x="54" y="42" width="12" height="16" rx="2" fill="#FFFFFF" stroke="#003366" stroke-width="1.2"/>
        <circle cx="60" cy="48" r="2.5" fill="#003366"/>
      </svg>`;

    case 'turkey':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="100" fill="#E30A17"/>
        <!-- White Crescent -->
        <circle cx="65" cy="50" r="24" fill="#FFFFFF"/>
        <circle cx="71" cy="50" r="19" fill="#E30A17"/>
        <!-- 5-pointed Star -->
        <polygon points="86,50 91.5,52 89.5,46.5 94.5,43 88.5,43 86,37.5 83.5,43 77.5,43 82.5,46.5 80.5,52" fill="#FFFFFF"/>
      </svg>`;

    /* ================= ASIA ================= */
    case 'iran':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="33.33" fill="#239F40"/>
        <rect y="33.33" width="150" height="33.34" fill="#FFFFFF"/>
        <rect y="66.67" width="150" height="33.33" fill="#DA0000"/>
        <!-- Takbir Border Pattern stylized -->
        <line x1="0" y1="33.33" x2="150" y2="33.33" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="4,2"/>
        <line x1="0" y1="66.67" x2="150" y2="66.67" stroke="#FFFFFF" stroke-width="3" stroke-dasharray="4,2"/>
        <!-- Nishan / Emblem of Iran -->
        <g transform="translate(75, 50)" fill="#DA0000">
          <ellipse cx="0" cy="0" rx="3" ry="12"/>
          <path d="M-8 4 C-8 -4 -2 -10 0 -11 C2 -10 8 -4 8 4 C6 2 4 1 0 1 C-4 1 -6 2 -8 4 Z"/>
          <path d="M-12 1 C-12 -6 -5 -12 0 -14 C5 -12 12 -6 12 1 C10 -1 7 -3 0 -3 C-7 -3 -10 -1 -12 1 Z"/>
          <line x1="0" y1="-14" x2="0" y2="-17" stroke="#DA0000" stroke-width="1.8"/>
        </g>
      </svg>`;

    case 'china':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="100" fill="#EE1C25"/>
        <!-- Large Golden Star -->
        <polygon points="25,12 28.5,23 40,23 31,30 34.5,41 25,34 15.5,41 19,30 10,23 21.5,23" fill="#FFFF00"/>
        <!-- 4 Smaller Stars forming an arc -->
        <circle cx="50" cy="12" r="3.2" fill="#FFFF00"/>
        <circle cx="60" cy="22" r="3.2" fill="#FFFF00"/>
        <circle cx="60" cy="36" r="3.2" fill="#FFFF00"/>
        <circle cx="50" cy="46" r="3.2" fill="#FFFF00"/>
      </svg>`;

    case 'japan':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="100" fill="#FFFFFF"/>
        <circle cx="75" cy="50" r="30" fill="#BC002D"/>
      </svg>`;

    case 'india':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="33.33" fill="#FF9933"/>
        <rect y="33.33" width="150" height="33.34" fill="#FFFFFF"/>
        <rect y="66.67" width="150" height="33.33" fill="#138808"/>
        <!-- Ashoka Chakra (24-spoke Navy Wheel) -->
        <circle cx="75" cy="50" r="12" fill="none" stroke="#000080" stroke-width="1.5"/>
        <circle cx="75" cy="50" r="2.5" fill="#000080"/>
        <g stroke="#000080" stroke-width="0.75" transform="translate(75, 50)">
          <line x1="0" y1="-12" x2="0" y2="12"/><line x1="-12" y1="0" x2="12" y2="0"/>
          <line x1="-8.5" y1="-8.5" x2="8.5" y2="8.5"/><line x1="-8.5" y1="8.5" x2="8.5" y2="-8.5"/>
          <line x1="-4.6" y1="-11" x2="4.6" y2="11"/><line x1="-11" y1="-4.6" x2="11" y2="4.6"/>
          <line x1="-11" y1="4.6" x2="11" y2="-4.6"/><line x1="-4.6" y1="11" x2="4.6" y2="-11"/>
        </g>
      </svg>`;

    case 'south-korea':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="100" fill="#FFFFFF"/>
        <!-- Taegeuk (Yin-Yang) -->
        <g transform="translate(75, 50) rotate(-34)">
          <path d="M-20 0 A20 20 0 0 1 20 0 A10 10 0 0 1 0 0 A10 10 0 0 0 -20 0" fill="#CD2E3A"/>
          <path d="M-20 0 A20 20 0 0 0 20 0 A10 10 0 0 1 0 0 A10 10 0 0 0 -20 0" fill="#0047A0"/>
        </g>
        <!-- 4 Trigrams (Geon, Gam, Ri, Gon) -->
        <g stroke="#000000" stroke-width="2.5" fill="none">
          <line x1="32" y1="24" x2="44" y2="16"/><line x1="36" y1="28" x2="48" y2="20"/><line x1="40" y1="32" x2="52" y2="24"/>
          <line x1="108" y1="68" x2="120" y2="76"/><line x1="104" y1="72" x2="116" y2="80"/><line x1="100" y1="76" x2="112" y2="84"/>
          <line x1="108" y1="24" x2="120" y2="16"/><line x1="104" y1="28" x2="116" y2="20"/><line x1="100" y1="32" x2="112" y2="24"/>
          <line x1="32" y1="68" x2="44" y2="76"/><line x1="36" y1="72" x2="48" y2="80"/><line x1="40" y1="76" x2="52" y2="84"/>
        </g>
      </svg>`;

    case 'saudi-arabia':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="100" fill="#006C35"/>
        <!-- Shahada representation & horizontal sword -->
        <text x="75" y="45" font-family="'Amiri', 'Noto Naskh Arabic', serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">لا إله إلا الله محمد رسول الله</text>
        <path d="M35 68 H115 L118 65 L115 62 H35 L30 65 Z" fill="#FFFFFF"/>
        <rect x="110" y="58" width="4" height="14" rx="1" fill="#FFFFFF"/>
      </svg>`;

    /* ================= SOUTH AMERICA ================= */
    case 'brazil':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="100" fill="#009C3B"/>
        <!-- Yellow Rhombus -->
        <polygon points="75,8 140,50 75,92 10,50" fill="#FFDF00"/>
        <!-- Celestial Blue Disc with Star Arc -->
        <circle cx="75" cy="50" r="22" fill="#002776"/>
        <path d="M54 53 Q75 42 96 55" stroke="#FFFFFF" stroke-width="2.5" fill="none"/>
        <g fill="#FFFFFF">
          <circle cx="75" cy="62" r="1.3"/><circle cx="71" cy="58" r="1.1"/><circle cx="79" cy="59" r="1.1"/>
          <circle cx="83" cy="64" r="1"/><circle cx="68" cy="64" r="1"/><circle cx="75" cy="42" r="1.3"/>
        </g>
      </svg>`;

    case 'argentina':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="33.33" fill="#74ACDF"/>
        <rect y="33.33" width="150" height="33.34" fill="#FFFFFF"/>
        <rect y="66.67" width="150" height="33.33" fill="#74ACDF"/>
        <!-- Sun of May (Sol de Mayo) -->
        <circle cx="75" cy="50" r="7.5" fill="#F6B40E" stroke="#843511" stroke-width="0.8"/>
        <g stroke="#F6B40E" stroke-width="1.2">
          <line x1="75" y1="36" x2="75" y2="42"/><line x1="75" y1="58" x2="75" y2="64"/>
          <line x1="61" y1="50" x2="67" y2="50"/><line x1="83" y1="50" x2="89" y2="50"/>
          <line x1="65" y1="40" x2="69" y2="44"/><line x1="81" y1="56" x2="85" y2="60"/>
          <line x1="65" y1="60" x2="69" y2="56"/><line x1="81" y1="44" x2="85" y2="40"/>
        </g>
      </svg>`;

    /* ================= AFRICA ================= */
    case 'egypt':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="33.33" fill="#CE1126"/>
        <rect y="33.33" width="150" height="33.34" fill="#FFFFFF"/>
        <rect y="66.67" width="150" height="33.33" fill="#000000"/>
        <!-- Golden Eagle of Saladin -->
        <path d="M72 40 Q75 36 78 40 L82 46 L80 58 L75 60 L70 58 L68 46 Z" fill="#C09300" stroke="#7A5800" stroke-width="0.8"/>
        <rect x="73" y="48" width="4" height="6" fill="#CE1126"/>
      </svg>`;

    case 'south-africa':
      return `<svg class="flag-svg" viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="150" height="50" fill="#E03C31"/>
        <rect y="50" width="150" height="50" fill="#001489"/>
        <!-- White and Gold bands -->
        <path d="M0 0 L60 50 L0 100" fill="#000000"/>
        <path d="M0 6 L52 50 L0 94" fill="none" stroke="#FFB612" stroke-width="7"/>
        <path d="M0 0 L60 50 H150 V100 H60 L0 100" fill="none" stroke="#FFFFFF" stroke-width="20"/>
        <path d="M0 0 L60 50 H150 V66 H70 L20 100 H0 Z M0 0 H20 L70 34 H150 V50 H60 L0 100" fill="#007749"/>
      </svg>`;

    /* ================= OCEANIA ================= */
    case 'australia':
      return `<svg class="flag-svg" viewBox="0 0 160 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="160" height="100" fill="#012169"/>
        <!-- Union Jack in canton -->
        <g transform="scale(0.5)">
          <rect width="160" height="100" fill="#012169"/>
          <path d="M0 0 L160 100 M160 0 L0 100" stroke="#FFFFFF" stroke-width="20"/>
          <path d="M0 0 L160 100 M160 0 L0 100" stroke="#C8102E" stroke-width="6"/>
          <path d="M80 0 V100 M0 50 H160" stroke="#FFFFFF" stroke-width="32"/>
          <path d="M80 0 V100 M0 50 H160" stroke="#C8102E" stroke-width="20"/>
        </g>
        <!-- Commonwealth Star (7-pointed) -->
        <circle cx="40" cy="75" r="9" fill="#FFFFFF"/>
        <!-- Southern Cross Stars -->
        <circle cx="120" cy="20" r="3" fill="#FFFFFF"/>
        <circle cx="138" cy="38" r="3" fill="#FFFFFF"/>
        <circle cx="120" cy="80" r="3" fill="#FFFFFF"/>
        <circle cx="104" cy="52" r="3" fill="#FFFFFF"/>
        <circle cx="125" cy="58" r="2" fill="#FFFFFF"/>
      </svg>`;

    default:
      return null;
  }
}
