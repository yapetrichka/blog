'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Code, Gamepad2, Wrench, Calendar, Terminal, User, GitBranch, Zap, CircuitBoard, Shield, Cpu, Smartphone, Server, Database, Cloud, Brain, Users, Palette } from 'lucide-react'
import { gsap } from 'gsap'
import { type PostPreview } from '@/lib/posts'

interface HomeClientProps {
  recentPosts: PostPreview[]
}

export default function HomeClient({ recentPosts }: HomeClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const techStackRef = useRef<HTMLDivElement>(null)

  // State for floating particles to avoid hydration mismatch
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }>>([])

  useEffect(() => {
    // Generate particles on client side only
    const generatedParticles = Array.from({ length: 20 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${3 + Math.random() * 4}s`
    }))
    setParticles(generatedParticles)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reset elements to initial state
      gsap.set([titleRef.current, descriptionRef.current, buttonsRef.current], {
        opacity: 0,
        y: 30
      })

      // Create timeline for sequential animations
      const tl = gsap.timeline()

      // Animate title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })

      // Animate description
      tl.to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")

      // Animate buttons
      tl.to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")

    }, containerRef)

    return () => ctx.revert()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getCategoryFromTags = (tags: string[]): string => {
    if (tags.some(tag => tag.toLowerCase().includes('unity'))) return 'Unity'
    if (tags.some(tag => ['tool', 'utility', 'converter'].includes(tag.toLowerCase()))) return 'Tools'
    if (tags.some(tag => ['flutter', 'dart'].includes(tag.toLowerCase()))) return 'Mobile'
    if (tags.some(tag => ['csharp', 'dotnet', '.net'].includes(tag.toLowerCase()))) return 'C#/.NET'
    return 'General'
  }

  return (
    <div ref={containerRef} className="min-h-screen cyberpunk-bg">
      {/* Hero Section with Cyberpunk Styling */}
      <section ref={heroRef} className="relative py-20 lg:py-32 bg-cyberpunk-base overflow-hidden">
        {/* Cyberpunk matrix background */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 md:grid-cols-16 lg:grid-cols-20 gap-2 h-full w-full">
            {Array.from({ length: 80 }).map((_, i) => (
              <div key={i} className="bg-cyberpunk-yellow h-px w-px animate-neon-flicker" 
                   style={{ animationDelay: `${i * 200}ms` }}></div>
            ))}
          </div>
        </div>

        {/* Cyberpunk grid overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(252, 227, 0, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(252, 227, 0, 0.3) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Cyberpunk terminal prompt header */}
            <div className="inline-flex items-center gap-2 mb-6 text-cyberpunk-yellow font-tech text-sm border border-cyberpunk-yellow/30 px-4 py-2 rounded blur-dark">
              <CircuitBoard className="w-4 h-4 animate-cyberpunk-pulse" />
              <span>&gt; INITIALIZING SYSTEM...</span>
            </div>

            <h1 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-6 font-cyberpunk uppercase tracking-wider">
              <span className="text-text-white">UNITY AND </span>
              <span className="text-cyberpunk-yellow">.NET</span>
            </h1>
            
            <div ref={descriptionRef} className="cyberpunk-card max-w-3xl mx-auto mb-8 border border-cyberpunk-yellow/50">
              <div className="font-tech text-lg text-text-primary">
                <span className="text-cyberpunk-yellow">&gt; </span>
                <span className="text-text-white">ACCESSING DATABASE: PRACTICAL KNOWLEDGE FOR FUTURE DEVELOPERS</span>
                <br />
                <span className="text-cyberpunk-yellow">&gt; </span>
                <span className="text-text-white">LOADING MODULES: DEV TOOLS</span>
                <br />
                <span className="text-cyberpunk-yellow">&gt; </span>
                <span className="text-cyberpunk-yellow">STATUS: [READY] - NEURAL LINK ESTABLISHED</span>
              </div>
            </div>
            
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/posts"
                className="inline-flex items-center px-8 py-4 bg-cyberpunk-yellow text-cyberpunk-base rounded border border-cyberpunk-white hover:shadow-neon-yellow transition-all duration-300 font-tech font-bold uppercase tracking-wider cyberpunk-button group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyberpunk-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Zap className="mr-2 w-5 h-5 group-hover:animate-cyberpunk-pulse" />
                <span className="relative z-10">ACCESS ARCHIVES</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Link>
              <button
                onClick={() => techStackRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 border-2 border-cyberpunk-yellow text-cyberpunk-yellow rounded hover:bg-cyberpunk-yellow hover:text-cyberpunk-base transition-all duration-300 font-tech font-bold uppercase tracking-wider group hover:shadow-neon-yellow"
              >
                <Cpu className="mr-2 w-5 h-5 group-hover:animate-cyberpunk-glitch" />
                TECH STACK
              </button>
            </div>
          </div>
        </div>

        {/* Large Blue Typewriter Code Effect */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {/* One large typewriter effect covering almost entire screen */}
          <div className="absolute top-8 left-4 right-4 bottom-8 opacity-35">
            <div className="typewriter-code text-xs leading-relaxed">
              <div className="typewriter-line" style={{ animationDelay: '0s' }}>using UnityEngine;</div>
              <div className="typewriter-line" style={{ animationDelay: '0.3s' }}>using System.Collections.Generic;</div>
              <div className="typewriter-line" style={{ animationDelay: '0.6s' }}>using Unity.Netcode;</div>
              <div className="typewriter-line" style={{ animationDelay: '0.9s' }}>using UnityEngine.AI;</div>
              <div className="typewriter-line" style={{ animationDelay: '1.2s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '1.5s' }}>public class PlayerController : NetworkBehaviour {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '1.8s' }}>    [Header("Movement Settings")]</div>
              <div className="typewriter-line" style={{ animationDelay: '2.1s' }}>    [SerializeField] private float moveSpeed = 5f;</div>
              <div className="typewriter-line" style={{ animationDelay: '2.4s' }}>    [SerializeField] private float jumpForce = 10f;</div>
              <div className="typewriter-line" style={{ animationDelay: '2.7s' }}>    [SerializeField] private float sprintMultiplier = 1.5f;</div>
              <div className="typewriter-line" style={{ animationDelay: '3.0s' }}>    [SerializeField] private LayerMask groundLayer;</div>
              <div className="typewriter-line" style={{ animationDelay: '3.3s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '3.6s' }}>    [Header("Network Variables")]</div>
              <div className="typewriter-line" style={{ animationDelay: '3.9s' }}>    private NetworkVariable&lt;Vector3&gt; networkPosition = new NetworkVariable&lt;Vector3&gt;();</div>
              <div className="typewriter-line" style={{ animationDelay: '4.2s' }}>    private NetworkVariable&lt;float&gt; networkRotation = new NetworkVariable&lt;float&gt;();</div>
              <div className="typewriter-line" style={{ animationDelay: '4.5s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '4.8s' }}>    [Header("Components")]</div>
              <div className="typewriter-line" style={{ animationDelay: '5.1s' }}>    private Rigidbody rb;</div>
              <div className="typewriter-line" style={{ animationDelay: '5.4s' }}>    private Animator animator;</div>
              <div className="typewriter-line" style={{ animationDelay: '5.7s' }}>    private CharacterController controller;</div>
              <div className="typewriter-line" style={{ animationDelay: '6.0s' }}>    private bool isGrounded;</div>
              <div className="typewriter-line" style={{ animationDelay: '6.3s' }}>    private Vector3 moveDirection;</div>
              <div className="typewriter-line" style={{ animationDelay: '6.6s' }}>    private float currentSpeed;</div>
              <div className="typewriter-line" style={{ animationDelay: '6.9s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '7.2s' }}>    public override void OnNetworkSpawn() {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '7.5s' }}>        rb = GetComponent&lt;Rigidbody&gt;();</div>
              <div className="typewriter-line" style={{ animationDelay: '7.8s' }}>        animator = GetComponent&lt;Animator&gt;();</div>
              <div className="typewriter-line" style={{ animationDelay: '8.1s' }}>        controller = GetComponent&lt;CharacterController&gt;();</div>
              <div className="typewriter-line" style={{ animationDelay: '8.4s' }}>        InitializePlayer();</div>
              <div className="typewriter-line" style={{ animationDelay: '8.7s' }}>    {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '9.0s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '9.3s' }}>    void Update() {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '9.6s' }}>        if (!IsOwner) return;</div>
              <div className="typewriter-line" style={{ animationDelay: '9.9s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '10.2s' }}>        HandleInput();</div>
              <div className="typewriter-line" style={{ animationDelay: '10.5s' }}>        CheckGrounded();</div>
              <div className="typewriter-line" style={{ animationDelay: '10.8s' }}>        MovePlayer();</div>
              <div className="typewriter-line" style={{ animationDelay: '11.1s' }}>        UpdateAnimations();</div>
              <div className="typewriter-line" style={{ animationDelay: '11.4s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '11.7s' }}>        if (IsServer) {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '12.0s' }}>            networkPosition.Value = transform.position;</div>
              <div className="typewriter-line" style={{ animationDelay: '12.3s' }}>            networkRotation.Value = transform.eulerAngles.y;</div>
              <div className="typewriter-line" style={{ animationDelay: '12.6s' }}>        {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '12.9s' }}>    {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '13.2s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '13.5s' }}>    private void HandleInput() {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '13.8s' }}>        float horizontal = Input.GetAxis("Horizontal");</div>
              <div className="typewriter-line" style={{ animationDelay: '14.1s' }}>        float vertical = Input.GetAxis("Vertical");</div>
              <div className="typewriter-line" style={{ animationDelay: '14.4s' }}>        bool isSprinting = Input.GetKey(KeyCode.LeftShift);</div>
              <div className="typewriter-line" style={{ animationDelay: '14.7s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '15.0s' }}>        moveDirection = new Vector3(horizontal, 0, vertical).normalized;</div>
              <div className="typewriter-line" style={{ animationDelay: '15.3s' }}>        moveDirection = transform.TransformDirection(moveDirection);</div>
              <div className="typewriter-line" style={{ animationDelay: '15.6s' }}>        currentSpeed = isSprinting ? moveSpeed * sprintMultiplier : moveSpeed;</div>
              <div className="typewriter-line" style={{ animationDelay: '15.9s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '16.2s' }}>        if (Input.GetKeyDown(KeyCode.Space) && isGrounded) {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '16.5s' }}>            Jump();</div>
              <div className="typewriter-line" style={{ animationDelay: '16.8s' }}>        {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '17.1s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '17.4s' }}>        if (Input.GetKeyDown(KeyCode.F)) {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '17.7s' }}>            InteractServerRpc();</div>
              <div className="typewriter-line" style={{ animationDelay: '18.0s' }}>        {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '18.3s' }}>    {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '18.6s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '18.9s' }}>    private void MovePlayer() {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '19.2s' }}>        Vector3 velocity = moveDirection * currentSpeed;</div>
              <div className="typewriter-line" style={{ animationDelay: '19.5s' }}>        velocity.y = rb.velocity.y;</div>
              <div className="typewriter-line" style={{ animationDelay: '19.8s' }}>        rb.velocity = velocity;</div>
              <div className="typewriter-line" style={{ animationDelay: '20.1s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '20.4s' }}>        if (moveDirection.magnitude &gt; 0.1f) {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '20.7s' }}>            Quaternion targetRotation = Quaternion.LookRotation(moveDirection);</div>
              <div className="typewriter-line" style={{ animationDelay: '21.0s' }}>            transform.rotation = Quaternion.Lerp(transform.rotation, targetRotation, Time.deltaTime * 10f);</div>
              <div className="typewriter-line" style={{ animationDelay: '21.3s' }}>        {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '21.6s' }}>    {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '21.9s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '22.2s' }}>    private void Jump() {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '22.5s' }}>        rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);</div>
              <div className="typewriter-line" style={{ animationDelay: '22.8s' }}>        JumpServerRpc();</div>
              <div className="typewriter-line" style={{ animationDelay: '23.1s' }}>        animator.SetTrigger("Jump");</div>
              <div className="typewriter-line" style={{ animationDelay: '23.4s' }}>    {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '23.7s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '24.0s' }}>    private void CheckGrounded() {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '24.3s' }}>        Ray ray = new Ray(transform.position + Vector3.up * 0.1f, Vector3.down);</div>
              <div className="typewriter-line" style={{ animationDelay: '24.6s' }}>        isGrounded = Physics.Raycast(ray, 1.2f, groundLayer);</div>
              <div className="typewriter-line" style={{ animationDelay: '24.9s' }}>        animator.SetBool("IsGrounded", isGrounded);</div>
              <div className="typewriter-line" style={{ animationDelay: '25.2s' }}>    {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '25.5s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '25.8s' }}>    private void UpdateAnimations() {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '26.1s' }}>        animator.SetFloat("Speed", rb.velocity.magnitude);</div>
              <div className="typewriter-line" style={{ animationDelay: '26.4s' }}>        animator.SetBool("IsSprinting", currentSpeed &gt; moveSpeed);</div>
              <div className="typewriter-line" style={{ animationDelay: '26.7s' }}>    {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '27.0s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '27.3s' }}>    [ServerRpc]</div>
              <div className="typewriter-line" style={{ animationDelay: '27.6s' }}>    private void JumpServerRpc() {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '27.9s' }}>        JumpClientRpc();</div>
              <div className="typewriter-line" style={{ animationDelay: '28.2s' }}>    {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '28.5s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '28.8s' }}>    [ClientRpc]</div>
              <div className="typewriter-line" style={{ animationDelay: '29.1s' }}>    private void JumpClientRpc() {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '29.4s' }}>        PlayJumpEffect();</div>
              <div className="typewriter-line" style={{ animationDelay: '29.7s' }}>        AudioSource.PlayClipAtPoint(jumpSound, transform.position);</div>
              <div className="typewriter-line" style={{ animationDelay: '30.0s' }}>    {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '30.3s' }}></div>
              <div className="typewriter-line" style={{ animationDelay: '30.6s' }}>    [ServerRpc]</div>
              <div className="typewriter-line" style={{ animationDelay: '30.9s' }}>    private void InteractServerRpc() {'{'}</div>
              <div className="typewriter-line" style={{ animationDelay: '31.2s' }}>        // Handle interaction logic</div>
              <div className="typewriter-line" style={{ animationDelay: '31.5s' }}>        Debug.Log("Player interacted: " + gameObject.name);</div>
              <div className="typewriter-line" style={{ animationDelay: '31.8s' }}>    {'}'}</div>
              <div className="typewriter-line" style={{ animationDelay: '32.1s' }}>{'}'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Cyberpunk Panels */}
      <section className="py-20 bg-bg-primary relative">
        <div className="absolute inset-0 cyber-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center mb-12">
            <div>
              <div className="cyber-hud inline-block mb-4 p-3">
                <div className="flex items-center gap-2 text-accent-primary font-mono text-sm">
                  <Code className="w-4 h-4 animate-cyber-glow" />
                  <span className="cyber-neon-text">ANALYZING CORE MODULES...</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-text-primary cyber-zoom font-cyber">
                SYSTEM CAPABILITIES
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Gamepad2,
                title: "UNITY ENGINE",
                description: "Advanced game development techniques, optimization strategies, and best practices",
                color: "accent-primary"
              },
              {
                icon: Code,
                title: ".NET FRAMEWORK",
                description: "Modern C# programming, performance optimization, and architectural patterns",
                color: "accent-secondary"
              },
              {
                icon: Wrench,
                title: "DEV TOOLS",
                description: "Custom tools, automation scripts, and workflow optimization solutions",
                color: "accent-success"
              }
            ].map((feature, index) => (
              <div key={index} className="cyber-panel p-6 hover:shadow-cyber-cyan transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-${feature.color} bg-opacity-10 border border-${feature.color} mr-4`}>
                    <feature.icon className={`w-6 h-6 text-${feature.color} group-hover:animate-cyber-glow`} />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary font-cyber group-hover:text-accent-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Cyberpunk progress bar */}
                <div className="mt-4 h-1 bg-bg-secondary rounded overflow-hidden">
                  <div className={`h-full bg-${feature.color} group-hover:animate-cyber-progress`} style={{ width: '85%' }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section with GSAP Animations */}
      <section ref={techStackRef} className="py-20 bg-cyberpunk-base relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 gap-4 h-full w-full">
            {Array.from({ length: 32 }).map((_, i) => (
              <div 
                key={i} 
                className="border-l border-cyberpunk-yellow/20 animate-neon-pulse" 
                style={{ animationDelay: `${i * 150}ms` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="cyber-hud inline-block mb-6 p-3">
              <div className="flex items-center gap-2 text-cyberpunk-yellow font-mono text-sm">
                <Cpu className="w-4 h-4 animate-cyberpunk-pulse" />
                <span className="cyber-neon-text">SCANNING TECHNOLOGY ARSENAL...</span>
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-white cyber-zoom font-cyber uppercase tracking-wider mb-4">
              <span className="text-cyberpunk-yellow">TECH</span> STACK
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="font-tech text-lg text-text-primary">
                <span className="text-cyberpunk-yellow">&gt; </span>
                <span className="text-text-white">COMPREHENSIVE DEVELOPMENT ECOSYSTEM</span>
                <br />
                <span className="text-cyberpunk-yellow">&gt; </span>
                <span className="text-cyberpunk-yellow">STATUS: [FULLY ARMED AND OPERATIONAL]</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mobile Development */}
            <div className="cyber-panel-glass p-6 group gsap-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-accent-primary bg-opacity-10 border border-accent-primary">
                  <Smartphone className="w-6 h-6 text-accent-primary group-hover:animate-cyberpunk-pulse" />
                </div>
                <h3 className="text-lg font-bold text-text-white font-cyber">MOBILE DEV</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">Flutter</span>
                </div>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Backend */}
            <div className="cyber-panel-glass p-6 group gsap-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-accent-secondary bg-opacity-10 border border-accent-secondary">
                  <Server className="w-6 h-6 text-accent-secondary group-hover:animate-cyberpunk-pulse" />
                </div>
                <h3 className="text-lg font-bold text-text-white font-cyber">BACKEND</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">.NET</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">Yandex Database</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">Yandex Cloud Functions</span>
                </div>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-accent-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Development Tools */}
            <div className="cyber-panel-glass p-6 group gsap-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-accent-success bg-opacity-10 border border-accent-success">
                  <Terminal className="w-6 h-6 text-accent-success group-hover:animate-cyberpunk-pulse" />
                </div>
                <h3 className="text-lg font-bold text-text-white font-cyber">DEV TOOLS</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">Rider</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">Cursor AI Editor</span>
                </div>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-accent-success to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Game Development */}
            <div className="cyber-panel-glass p-6 group gsap-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-accent-primary bg-opacity-10 border border-accent-primary">
                  <Gamepad2 className="w-6 h-6 text-accent-primary group-hover:animate-cyberpunk-pulse" />
                </div>
                <h3 className="text-lg font-bold text-text-white font-cyber">GAME DEV</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">Unity</span>
                </div>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* AI Tools */}
            <div className="cyber-panel-glass p-6 group gsap-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-cyberpunk-yellow bg-opacity-10 border border-cyberpunk-yellow">
                  <Brain className="w-6 h-6 text-cyberpunk-yellow group-hover:animate-cyberpunk-pulse" />
                </div>
                <h3 className="text-lg font-bold text-text-white font-cyber">AI TOOLS</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">ChatGPT</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">DeepSeek</span>
                </div>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-cyberpunk-yellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* DevOps */}
            <div className="cyber-panel-glass p-6 group gsap-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-accent-secondary bg-opacity-10 border border-accent-secondary">
                  <Cloud className="w-6 h-6 text-accent-secondary group-hover:animate-cyberpunk-pulse" />
                </div>
                <h3 className="text-lg font-bold text-text-white font-cyber">DEVOPS</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">Docker</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">GitHub Actions</span>
                </div>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-accent-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Design & Prototyping */}
            <div className="cyber-panel-glass p-6 group gsap-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-accent-success bg-opacity-10 border border-accent-success">
                  <Palette className="w-6 h-6 text-accent-success group-hover:animate-cyberpunk-pulse" />
                </div>
                <h3 className="text-lg font-bold text-text-white font-cyber">DESIGN</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">Figma</span>
                </div>
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">GIMP</span>
                </div>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-accent-success to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Project Management */}
            <div className="cyber-panel-glass p-6 group gsap-slide-up">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-accent-primary bg-opacity-10 border border-accent-primary">
                  <Users className="w-6 h-6 text-accent-primary group-hover:animate-cyberpunk-pulse" />
                </div>
                <h3 className="text-lg font-bold text-text-white font-cyber">PROJECT MGMT</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-secondary group-hover:text-text-primary transition-colors">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-neon-flicker"></div>
                  <span className="font-tech">Notion</span>
                </div>
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Tech Stack Summary */}
          <div className="mt-16 text-center">
            <div className="cyberpunk-card max-w-4xl mx-auto border border-cyberpunk-yellow/50 p-8">
              <div className="font-tech text-lg text-text-primary">
                <span className="text-cyberpunk-yellow">&gt; </span>
                <span className="text-text-white">SYSTEM STATUS: FULLY OPERATIONAL</span>
                <br />
                <span className="text-cyberpunk-yellow">&gt; </span>
                <span className="text-text-white">TECHNOLOGIES: 15+ CORE SYSTEMS ACTIVE</span>
                <br />
                <span className="text-cyberpunk-yellow">&gt; </span>
                <span className="text-cyberpunk-yellow">CAPABILITIES: UNLIMITED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((particle, index) => (
            <div
              key={index}
              className="absolute w-1 h-1 bg-cyberpunk-yellow rounded-full animate-float-particle"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-20 bg-bg-primary relative">
        <div className="absolute inset-0 cyber-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center mb-12">
            <div>
              <div className="cyber-hud inline-block mb-4 p-3">
                <div className="flex items-center gap-2 text-accent-primary font-mono text-sm">
                  <GitBranch className="w-4 h-4 animate-cyber-glow" />
                  <span className="cyber-neon-text">ACCESSING RECENT DATA...</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-text-primary cyber-zoom font-cyber">
                LATEST PROTOCOLS
              </h2>
            </div>
            <Link
              href="/posts"
              className="cyber-btn-outline font-cyber font-medium cyber-zoom group"
            >
              VIEW ALL DATA <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">→</span>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article key={post.slug} className="cyber-panel-glass p-6 hover:shadow-cyber-cyan transition-all duration-300 group">
                <div className="flex items-center gap-2 mb-4 text-accent-secondary font-mono text-sm">
                  <Calendar className="w-4 h-4" />
                  <time className="cyber-neon-text">{formatDate(post.frontmatter.date)}</time>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-3 font-cyber group-hover:text-accent-primary transition-colors duration-300">
                  <Link href={`/posts/${post.slug}`} className="hover:cyber-glow">
                    {post.frontmatter.title}
                  </Link>
                </h3>
                
                <p className="text-text-secondary mb-4 group-hover:text-text-primary transition-colors duration-300">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-primary bg-opacity-10 text-accent-primary border border-accent-primary">
                    {getCategoryFromTags(post.frontmatter.tags)}
                  </span>
                  
                  <Link
                    href={`/posts/${post.slug}`}
                    className="cyber-btn-outline text-sm py-2 px-4 group-hover:shadow-cyber-cyan"
                  >
                    ACCESS →
                  </Link>
                </div>

                {/* Cyberpunk data stream effect */}
                <div className="mt-4 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 