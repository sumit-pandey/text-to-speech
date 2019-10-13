import vttToJson from "vtt-to-json";

let vttString = `

00:00:00.000 --> 00:00:00.720
History goes fast.

00:00:01.010 --> 00:00:04.360
It's already been a century
100 years of magneti.

00:00:04.490 --> 00:00:05.030
Marelli.

00:00:05.640 --> 00:00:10.049
This year is a special one for us, and we
wanted to mark it with a unique and just a

00:00:10.049 --> 00:00:14.729
special edition of our historical
Heritage leaving the traditional route in

00:00:14.729 --> 00:00:18.710
chronological order aside and riding
the wave of an almost theatrical form of

00:00:18.710 --> 00:00:19.440
Storytelling.

00:00:19.580 --> 00:00:24.150
We set out to narrator history through 12
themed fragments which paying homage to

00:00:24.150 --> 00:00:24.880
our tradition.

00:00:24.910 --> 00:00:28.800
We wouldn't call anything but
Sparks or an Italian shinty lie.

00:00:29.485 --> 00:00:33.945
12 panels to be collected to retrace some
of the most important moments of a bright

00:00:33.945 --> 00:00:38.765
industrial intrapreneurial and
technological Adventure the Troubadour who

00:00:38.765 --> 00:00:42.515
will accompany us on this journey came
from the pennant Noel Queen Tavola

00:00:42.945 --> 00:00:46.755
director of our historic corporate
magazine Spratt Suburgatory.

00:00:47.205 --> 00:00:51.345
He is the little man with the megaphone
the noisy character whose job it was to

00:00:51.385 --> 00:00:56.135
open the demand or a parabola or let me
speak section the area dedicated to the

00:00:56.135 --> 00:00:57.225
readers questions.

00:00:57.945 --> 00:01:02.875
Now that the introductions are over we can
begin enjoy your trip into the world of

00:01:02.875 --> 00:01:03.794
magneti marelli.

00:01:04.175 --> 00:01:06.745
Let us now give the word
to the Sparks themselves.
`;
export const vttJson = vttToJson(vttString).then(response=>response);
const file = vttJson.then(result=>result)
