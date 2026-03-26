// Register Astro components for live re-rendering in CloudCannon's Visual Editor
import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";

// Import widget components
import Hero from "../components/widgets/Hero.astro";
import CTA from "../components/widgets/CTA.astro";
import ServiceCard from "../components/widgets/ServiceCard.astro";

// Register components
registerAstroComponent("hero", Hero);
registerAstroComponent("cta", CTA);
registerAstroComponent("service_card", ServiceCard);
