import { resolve } from 'https://deno.land/std@0.148.0/path/mod.ts';
import { gunzip } from 'https://deno.land/x/compress@v0.4.5/mod.ts';

const __dirname = new URL('.', import.meta.url).pathname;
const agentsList =
  'https://github.com/intoli/user-agents/blob/master/src/user-agents.json.gz?raw=true';

// Only get desktop and mobile agents
const allowedAgents = new Set([
  'desktop',
  'mobile',
]);

const res = await fetch(agentsList);
const buf = await res.arrayBuffer();

const decompressed = gunzip(new Uint8Array(buf));
const contents = new TextDecoder().decode(decompressed);

const agents = JSON.parse(contents);

if (!Array.isArray(agents)) {
  throw new Error('Invalid user-agents.json');
}

const agentsByDevice = agents.reduce((acc, agent) => {
  const device = agent.deviceCategory;
  if (!allowedAgents.has(device)) {
    return acc;
  }

  if (!acc[device]) {
    acc[device] = [];
  }

  // we dont want to massive of a list of agents for each device
  if (acc[device].length <= 25) {
    acc[device].push(agent.userAgent);
  }

  return acc;
}, {} as Record<string, string[]>);

const uaFile = resolve(__dirname, '../src/utils/user-agents.json');
const uaList = JSON.stringify(agentsByDevice, null, 2);

await Deno.writeFile(uaFile, new TextEncoder().encode(uaList));
