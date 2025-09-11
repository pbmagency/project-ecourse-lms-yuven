import { cn } from '@/lib/utils';
import { Rocket, Award, Heart, Briefcase, Clock, Zap } from 'lucide-react';

interface BenefitItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay?: number;
}

function BenefitItem({ icon, title, description, delay = 0 }: BenefitItemProps) {
    return (
        <div
            className={cn(
                'group flex items-start gap-4 rounded-xl p-4',
                'bg-card/20 border-border/30 border backdrop-blur-sm',
                'hover:bg-card/40 hover:border-primary/30 hover:shadow-primary/10 hover:shadow-lg',
                'transition-all duration-500 hover:-translate-y-1',
                'animate-fade-in cursor-pointer',
            )}
            style={{ animationDelay: `${delay}ms`, animationFillMode: 'both' }}
        >
            <div
                className={cn(
                    'flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
                    'bg-primary/10 border-primary/20 text-primary border',
                    'group-hover:bg-primary/20 group-hover:border-primary/40 group-hover:shadow-primary/30 group-hover:shadow-lg',
                    'transition-all duration-300 group-hover:scale-110',
                )}
            >
                {icon}
            </div>
            <div className="flex-1">
                <h4 className="text-foreground group-hover:text-primary font-semibold transition-colors duration-300 mb-1">{title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

export function CanvaMasterclassSection() {
    return (
        <section className="border-border/50 relative border-t py-16 lg:py-32">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5 lg:gap-16">
                    {/* Left column - Image (40%) */}
                    <div className="animate-fade-in lg:col-span-2" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>
                        <div className="relative">
                            {/* Main image container */}
                            <div className="border-border/50 shadow-primary/10 aspect-[4/3] overflow-hidden rounded-2xl border shadow-2xl">
                                <img
                                    src="/storage/landing/canva-workspace.jpg"
                                    alt="Professional designer working with Canva interface creating stunning designs"
                                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                                    loading="lazy"
                                />
                                {/* Overlay with gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                            </div>

                            {/* Floating design elements */}
                            <div className="bg-primary/10 border-primary/20 absolute -top-4 -right-4 h-24 w-24 animate-pulse rounded-full border backdrop-blur-sm flex items-center justify-center">
                                <Zap className="h-8 w-8 text-primary" />
                            </div>
                            
                            <div
                                className="bg-accent/10 border-accent/20 absolute -bottom-6 -left-6 h-16 w-16 animate-pulse rounded-full border backdrop-blur-sm flex items-center justify-center"
                                style={{ animationDelay: '1s' }}
                            >
                                <Award className="h-6 w-6 text-accent" />
                            </div>

                            {/* Before/After showcase */}
                            <div className="absolute top-4 left-4 bg-background/90 border-border/50 border rounded-lg p-3 backdrop-blur-sm">
                                <div className="text-xs font-medium text-foreground mb-1">Before → After</div>
                                <div className="flex gap-2">
                                    <div className="w-8 h-6 bg-muted/50 rounded border"></div>
                                    <div className="w-8 h-6 bg-primary/20 rounded border border-primary/30"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right column - Content (60%) */}
                    <div className="animate-fade-in lg:col-span-3" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>
                        <div className="space-y-8">
                            {/* Header */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/20 flex h-8 w-8 items-center justify-center rounded-full">
                                        <Rocket className="text-primary h-5 w-5" />
                                    </div>
                                    <h3 className="text-foreground text-2xl font-bold">Mengapa Bergabung dengan</h3>
                                </div>
                                <h2 className="text-primary text-5xl font-bold leading-tight">Canva Masterclass</h2>
                                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                                    Kuasai seni desain profesional dan ubah ide kreatif Anda menjadi karya visual yang memukau. 
                                    Dengan Canva, Anda akan menghemat waktu, uang, dan mendapatkan hasil yang luar biasa.
                                </p>
                            </div>

                            {/* Benefits List */}
                            <div className="space-y-4">
                                <BenefitItem 
                                    icon={<Rocket className="h-6 w-6" />}
                                    title="Pembelajaran Cepat & Efektif"
                                    description="Kurikulum terstruktur dari dasar hingga advanced yang memungkinkan Anda menguasai Canva dalam waktu singkat"
                                    delay={600}
                                />
                                
                                <BenefitItem 
                                    icon={<Award className="h-6 w-6" />}
                                    title="Portfolio Profesional"
                                    description="Buat proyek nyata yang dapat langsung digunakan untuk bisnis atau personal branding Anda"
                                    delay={700}
                                />
                                
                                <BenefitItem 
                                    icon={<Heart className="h-6 w-6" />}
                                    title="Komunitas & Mentoring"
                                    description="Bergabung dengan komunitas designer aktif dan dapatkan bimbingan langsung dari expert"
                                    delay={800}
                                />
                                
                                <BenefitItem 
                                    icon={<Briefcase className="h-6 w-6" />}
                                    title="Peluang Karir Baru"
                                    description="Buka peluang sebagai freelance designer atau tingkatkan value profesional Anda di berbagai industri"
                                    delay={900}
                                />
                                
                                <BenefitItem 
                                    icon={<Clock className="h-6 w-6" />}
                                    title="Hemat Waktu & Biaya"
                                    description="Tidak perlu lagi outsource design atau menggunakan software mahal - semua bisa Anda kerjakan sendiri"
                                    delay={1000}
                                />
                                
                                <BenefitItem 
                                    icon={<Zap className="h-6 w-6" />}
                                    title="Tools Masa Depan"
                                    description="Canva digunakan oleh 100+ juta pengguna worldwide termasuk perusahaan Fortune 500"
                                    delay={1100}
                                />
                            </div>

                            {/* Call to action text */}
                            <div className="bg-card/20 border-border/30 border rounded-xl p-6 backdrop-blur-sm">
                                <p className="text-foreground font-medium text-center">
                                    Dapatkan kepercayaan diri untuk menciptakan desain menakjubkan yang mengangkat brand Anda ke level berikutnya
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}