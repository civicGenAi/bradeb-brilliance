import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";

// Brand colors used throughout
const BRAND = {
  bg: "#0a1628",
  cardBg: "#1f4590",
  accent: "#c9a84c",
  teal: "#157575",
  navy: "#1f4590",
};

type Review = {
  name: string;
  role: string;
  text: string;
  avatar?: string; // data url
};

const INITIAL_REVIEWS: Review[] = [
  {
    name: "Safia Mnyau",
    role: "Residential Client",
    text: "Bradeb delivered our complex on time and exceeded expectations. Structural integrity is unmatched.",
    avatar: undefined,
  },
  {
    name: "Emmanuel S.",
    role: "Commercial Developer",
    text: "Civil works laid the perfect foundation. Professional, precise, and completely reliable.",
    avatar: undefined,
  },
  {
    name: "Aisha T.",
    role: "Industrial Manager",
    text: "Industrial fumigation was outstanding. Strict safety protocols and zero disruption to operations.",
    avatar: undefined,
  },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [newReview, setNewReview] = useState<Review>({ name: "", role: "", text: "", avatar: undefined });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewReview((prev) => ({ ...prev, avatar: url }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.role || !newReview.text) return;
    setReviews((prev) => [newReview, ...prev]);
    setNewReview({ name: "", role: "", text: "", avatar: undefined });
  };

  return (
    <PageShell>
      <section className="min-h-screen" style={{ backgroundColor: BRAND.bg }}>
        <div className="mx-auto max-w-5xl px-6 py-12">
          <Reveal className="text-center mb-12">
            <h1 className="font-heading font-extrabold text-white text-4xl md:text-5xl">Client Reviews</h1>
            <p className="text-white/70 mt-4">Read what our partners say and share your own experience.</p>
          </Reveal>

          {/* Review submission form */}
          <form onSubmit={handleSubmit} className="bg-[#07396c]/30 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-[#1f4590]/30">
            <h2 className="font-heading font-bold text-white text-2xl mb-6">Write Your Review</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={newReview.name}
                onChange={handleChange}
                className="flex-1 bg-[#0a1628]/80 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition-colors"
                required
              />
              <input
                type="text"
                name="role"
                placeholder="Your Role / Company"
                value={newReview.role}
                onChange={handleChange}
                className="flex-1 bg-[#0a1628]/80 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition-colors"
                required
              />
            </div>
            <textarea
              name="text"
              placeholder="Your review..."
              rows={4}
              value={newReview.text}
              onChange={handleChange}
              className="w-full bg-[#0a1628]/80 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#c9a84c] transition-colors resize-none mb-4"
              required
            />
            <div className="flex items-center gap-4 mb-6">
              <input type="file" accept="image/*" onChange={handleAvatar} className="text-white" />
              {newReview.avatar && (
                <img src={newReview.avatar} alt="preview" className="h-12 w-12 rounded-full object-cover border border-[#c9a84c]" />
              )}
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-white text-[#0a1628] font-bold uppercase tracking-[0.1em] px-6 py-3 rounded-xl transition-colors shadow-[0_0_15px_rgba(201,168,76,0.2)]"
            >
              Submit Review <ArrowRight size={16} />
            </button>
          </form>

          {/* Reviews list */}
          <div className="grid gap-8">
            {reviews.map((r, i) => (
              <div key={i} className="flex items-start gap-6 p-6 bg-[#1f4590] rounded-2xl border border-[#26d4a0]/30">
                <div className="flex-shrink-0">
                  {r.avatar ? (
                    <img src={r.avatar} alt={r.name} className="h-16 w-16 rounded-full object-cover border border-[#c9a84c]" />
                  ) : (
                    <div className="h-16 w-16 rounded-full bg-[#07396c] flex items-center justify-center text-white font-bold">
                      {r.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-lg">{r.name}</h3>
                  <p className="text-white/70 text-sm mb-2">{r.role}</p>
                  <p className="text-white leading-relaxed">\"{r.text}\"</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/" className="inline-flex items-center gap-2 text-white underline">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
