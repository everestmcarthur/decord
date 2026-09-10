// Module ID: 7212
// Function ID: 7213
// Name: ConnectionCard
// Dependencies: [19, 7153, 21, 7213, 7230, 2]
// Exports: default

// Module 7212 (ConnectionCard)
import ApplicationConnectionCardDefault from "ApplicationConnectionCard" /* 7213 */;
import ProviderConnectionCardDefault from "ProviderConnectionCard" /* 7230 */;
import noop from "module_19" /* 19 */;

const OnboardingConnectionType = fn(7153).OnboardingConnectionType;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding/native/ConnectionCard.tsx");

export default function ConnectionCard(arg0) {
  ({ connection, guildId, location: _location } = arg0);
  const connection_type = connection.connection_type;
  if (OnboardingConnectionType.APPLICATION === connection_type) {
    const obj2 = { connection, guildId, location: _location };
    return jsx(ApplicationConnectionCardDefault, { connection, guildId, location: _location });
  } else if (tmp.PROVIDER_CONNECTED_ACCOUNT === connection_type) {
    const obj = { connection, guildId, location: _location };
    return jsx(ProviderConnectionCardDefault, { connection, guildId, location: _location });
  } else {
    const connection_type2 = connection.connection_type;
    return null;
  }
};
