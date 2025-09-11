import { cn } from '@/lib/utils';
import { Award, Briefcase, Clock, Heart, Rocket, Zap, Sparkles, Users, TrendingUp } from 'lucide-react';

interface BenefitCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay?: number;
    gradient: string;
}

function BenefitCard({ icon, title, description, delay = 0, gradient }: BenefitCardProps) {
    return (
        <div
            className={cn(
                'group relative overflow-hidden rounded-2xl p-6',
                'bg-gradient-to-br from-card/5 via-card/10 to-background/5',
                'border border-border/20 backdrop-blur-xl',
                'hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5',
                'transition-all duration-700 hover:-translate-y-2 hover:scale-[1.02]',
                'animate-fade-in cursor-pointer',
            )}
            style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
        >
            {/* Background gradient effect */}
            <div className={cn(
                'absolute inset-0 opacity-0 group-hover:opacity-100',
                'bg-gradient-to-br transition-opacity duration-500',
                gradient
            )} />
            
            {/* Content */}
            <div className="relative z-10">
                <div className={cn(
                    'mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl',
                    'bg-primary/10 border border-primary/20 text-primary',
                    'group-hover:bg-primary/20 group-hover:border-primary/40',
                    'group-hover:shadow-lg group-hover:shadow-primary/20',
                    'transition-all duration-500 group-hover:scale-110 group-hover:rotate-3',
                )}>
                    {icon}
                </div>
                <h3 className="text-foreground group-hover:text-primary mb-3 text-lg font-bold transition-colors duration-300">
                    {title}
                </h3>
                <p className="text-muted-foreground group-hover:text-foreground/90 text-sm leading-relaxed transition-colors duration-300">
                    {description}
                </p>
            </div>

            {/* Floating particles effect */}
            <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-primary/30 animate-pulse" 
                style={{ animationDelay: `${delay + 500}ms` }} />
            <div className="absolute top-1/3 -left-1 h-1 w-1 rounded-full bg-accent/40 animate-pulse" 
                style={{ animationDelay: `${delay + 1000}ms` }} />
        </div>
    );
}

export function CanvaMasterclassSection() {
    const benefits = [
        {
            icon: <Rocket className="h-7 w-7" />,
            title: "Pembelajaran Cepat & Efektif",
            description: "Kurikulum terstruktur dari dasar hingga advanced yang memungkinkan Anda menguasai Canva dalam waktu singkat",
            gradient: "from-blue-500/10 via-purple-500/10 to-pink-500/10"
        },
        {
            icon: <Award className="h-7 w-7" />,
            title: "Portfolio Profesional",
            description: "Buat proyek nyata yang dapat langsung digunakan untuk bisnis atau personal branding Anda",
            gradient: "from-emerald-500/10 via-teal-500/10 to-cyan-500/10"
        },
        {
            icon: <Heart className="h-7 w-7" />,
            title: "Komunitas & Mentoring",
            description: "Bergabung dengan komunitas designer aktif dan dapatkan bimbingan langsung dari expert",
            gradient: "from-pink-500/10 via-rose-500/10 to-red-500/10"
        },
        {
            icon: <Briefcase className="h-7 w-7" />,
            title: "Peluang Karir Baru",
            description: "Buka peluang sebagai freelance designer atau tingkatkan value profesional Anda di berbagai industri",
            gradient: "from-orange-500/10 via-amber-500/10 to-yellow-500/10"
        },
        {
            icon: <Clock className="h-7 w-7" />,
            title: "Hemat Waktu & Biaya",
            description: "Tidak perlu lagi outsource design atau menggunakan software mahal - semua bisa Anda kerjakan sendiri",
            gradient: "from-violet-500/10 via-indigo-500/10 to-blue-500/10"
        },
        {
            icon: <Zap className="h-7 w-7" />,
            title: "Tools Masa Depan",
            description: "Canva digunakan oleh 100+ juta pengguna worldwide termasuk perusahaan Fortune 500",
            gradient: "from-green-500/10 via-emerald-500/10 to-teal-500/10"
        }
    ];

    return (
        <section className="relative overflow-hidden border-t border-border/20 py-24 lg:py-32">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
            <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            
            {/* Floating orbs */}
            <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl animate-pulse" />
            <div className="absolute right-1/4 bottom-1/4 h-80 w-80 rounded-full bg-accent/5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="animate-fade-in text-center mb-16" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
                        <Sparkles className="h-4 w-4" />
                        Mengapa Memilih Kami
                    </div>
                    <h2 className="mb-6 text-4xl font-bold text-foreground lg:text-6xl">
                        Bergabung dengan{' '}
                        <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                            Canva Masterclass
                        </span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-muted-foreground leading-relaxed">
                        Kuasai seni desain profesional dan ubah ide kreatif Anda menjadi karya visual yang memukau. 
                        Dengan Canva, Anda akan menghemat waktu, uang, dan mendapatkan hasil yang luar biasa.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Visual Section */}
                    <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
                        <div className="relative">
                            {/* Main image */}
                            <div className="relative overflow-hidden rounded-3xl border border-border/20 shadow-2xl shadow-primary/5">
                                <img
                                    src="/storage/landing/canva-workspace.jpg"
                                    alt="Professional designer working with Canva interface creating stunning designs"
                                    className="h-[400px] w-full object-cover transition-transform duration-1000 hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                                
                                {/* Stats overlay */}
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="rounded-xl bg-background/90 border border-border/20 px-4 py-2 backdrop-blur-xl">
                                            <div className="flex items-center gap-2">
                                                <Users className="h-4 w-4 text-primary" />
                                                <span className="text-sm font-semibold text-foreground">100M+ Users</span>
                                            </div>
                                        </div>
                                        <div className="rounded-xl bg-background/90 border border-border/20 px-4 py-2 backdrop-blur-xl">
                                            <div className="flex items-center gap-2">
                                                <TrendingUp className="h-4 w-4 text-emerald-400" />
                                                <span className="text-sm font-semibold text-foreground">Fortune 500</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-6 -right-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 backdrop-blur-xl animate-bounce">
                                <Zap className="h-8 w-8 text-primary" />
                            </div>
                            
                            <div className="absolute -bottom-6 -left-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 border border-accent/20 backdrop-blur-xl animate-pulse">
                                <Sparkles className="h-6 w-6 text-accent" />
                            </div>
                        </div>
                    </div>

                    {/* Benefits Grid */}
                    <div className="lg:col-span-7 animate-fade-in" style={{ animationDelay: '600ms', animationFillMode: 'both' }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {benefits.map((benefit, index) => (
                                <BenefitCard
                                    key={benefit.title}
                                    icon={benefit.icon}
                                    title={benefit.title}
                                    description={benefit.description}
                                    gradient={benefit.gradient}
                                    delay={800 + index * 100}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="animate-fade-in mt-16 text-center" style={{ animationDelay: '1400ms', animationFillMode: 'both' }}>
                    <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 p-8 backdrop-blur-xl">
                        <h3 className="mb-4 text-xl font-bold text-foreground">
                            Siap Menciptakan Desain yang Memukau?
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Dapatkan kepercayaan diri untuk menciptakan desain menakjubkan yang mengangkat brand Anda ke level berikutnya
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
