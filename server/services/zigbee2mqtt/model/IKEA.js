const { features } = require('../utils/features');

/**
 * IKEA managed models.
 */
const IKEA = {
  brand: 'IKEA',
  models: {
    LED1545G12: [features.light, features.brightness, features.color_temperature],
    LED1546G12: [features.light, features.brightness, features.color_temperature],
    LED1623G12: [features.light, features.brightness],
    LED1537R6: [features.light, features.brightness, features.color_temperature],
    LED1650R5: [features.light, features.brightness],
    LED1536G5: [features.light, features.brightness, features.color_temperature],
    LED1733G7: [features.light, features.brightness, features.color_temperature],
    LED1622G12: [features.light, features.brightness],
    LED1624G9: [features.light, features.brightness, features.color],
    LED1649C5: [features.light, features.brightness],
    LED1934G3: [features.light, features.brightness],
    LED1732G11: [features.light, features.brightness, features.color_temperature],
    LED1924G9: [features.light, features.brightness, features.color_temperature, features.color],
    'ICTC-G-1': [features.brightness, features.switch_sensor],
    'ICPSHC24-10EU-IL-1': [features.light, features.brightness],
    'ICPSHC24-30EU-IL-1': [features.light, features.brightness],
    L1527: [features.light, features.brightness, features.color_temperature],
    L1529: [features.light, features.brightness, features.color_temperature],
    L1528: [features.light, features.brightness, features.color_temperature],
    L1531: [features.light, features.brightness, features.color_temperature],
    'E1603/E1702': [features.switch],
    'E1524/E1810': [features.switch_sensor],
    E1743: [features.button],
    'E1525/E1745': [features.motion],
    'E1603/E1702/E1708': [features.switch],
    // E1746: [], // Signal repeater
    'E2001/E2002': [features.button],
    LED1836G9: [features.light, features.brightness],
    LED1837R5: [features.light],
  },
};

module.exports = {
  IKEA,
};
