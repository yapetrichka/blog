import Link from 'next/link'
import { ArrowRight, Code, Gamepad2, Wrench, Calendar, Terminal, User, GitBranch, Zap, CircuitBoard, Shield, Cpu } from 'lucide-react'
import { getAllPosts, type PostPreview } from '@/lib/posts'

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen cyberpunk-bg">
      {/* Hero Section with Cyberpunk Styling */}
      <section className="relative py-20 lg:py-32 bg-cyberpunk-base overflow-hidden">
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

            <h1 className="text-4xl md:text-6xl font-bold mb-6 gsap-slide-up font-cyberpunk uppercase tracking-wider">
              <span className="text-text-white">UNITY AND </span>
              <span className="text-cyberpunk-yellow">.NET</span>
            </h1>
            
            <div className="cyberpunk-card max-w-3xl mx-auto mb-8 border border-cyberpunk-yellow/50">
              <div className="font-tech text-lg text-text-primary gsap-slide-up">
                <span className="text-cyberpunk-yellow">&gt; </span>
                <span className="text-text-white">ACCESSING DATABASE: PRACTICAL KNOWLEDGE FOR FUTURE DEVELOPERS</span>
                <br />
                <span className="text-cyberpunk-yellow">&gt; </span>
                <span className="text-text-white">LOADING MODULES: UNITY TUTORIALS // .NET PROGRAMMING // DEV TOOLS</span>
                <br />
                <span className="text-cyberpunk-yellow">&gt; </span>
                <span className="text-cyberpunk-yellow">STATUS: [READY] - NEURAL LINK ESTABLISHED</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center gsap-slide-up">
              <Link
                href="/posts"
                className="inline-flex items-center px-8 py-4 bg-cyberpunk-yellow text-cyberpunk-base rounded border border-cyberpunk-white hover:shadow-neon-yellow transition-all duration-300 font-tech font-bold uppercase tracking-wider cyberpunk-button group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-cyberpunk-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                <Zap className="mr-2 w-5 h-5 group-hover:animate-cyberpunk-pulse" />
                <span className="relative z-10">ACCESS ARCHIVES</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-cyberpunk-yellow text-cyberpunk-yellow rounded hover:bg-cyberpunk-yellow hover:text-cyberpunk-base transition-all duration-300 font-tech font-bold uppercase tracking-wider group hover:shadow-neon-yellow"
              >
                <User className="mr-2 w-5 h-5 group-hover:animate-cyberpunk-glitch" />
                PROFILE
              </Link>
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

          {/* Subtle blue matrix scanning effect */}
          <div className="absolute inset-0 blue-matrix-effect opacity-8"></div>
        </div>
      </section>

      {/* Features Section with Cyberpunk Terminal Windows */}
      <section className="py-20 blur-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-cyberpunk-yellow font-tech text-sm border border-cyberpunk-yellow/30 px-4 py-2 rounded blur-dark">
              <Terminal className="w-4 h-4 animate-cyberpunk-pulse" />
              <span>&gt; SCANNING MODULES...</span>
            </div>
            <h2 className="text-3xl font-bold text-text-white mb-4 gsap-fade-in font-cyberpunk uppercase tracking-wider">
              SYSTEM CAPABILITIES
            </h2>
            <p className="text-lg text-cyberpunk-yellow gsap-fade-in font-tech">
              <span className="text-cyberpunk-yellow">&gt; </span>
              ADVANCED NEURAL NETWORKS FOR ENHANCED DEVELOPMENT
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyberpunk-card p-6 gsap-scale group hover:shadow-neon-yellow transition-all duration-300 relative overflow-hidden border-cyberpunk-yellow">
              <div className="absolute inset-0 bg-cyberpunk-yellow opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-cyberpunk-base rounded flex items-center justify-center mx-auto mb-4 border border-cyberpunk-yellow group-hover:animate-cyberpunk-pulse">
                  <Gamepad2 className="w-6 h-6 text-cyberpunk-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-text-white mb-2 font-tech uppercase tracking-wider">
                  <span className="text-cyberpunk-yellow">&gt; </span>UNITY CORE
                </h3>
                <p className="text-cyberpunk-white font-tech text-sm leading-relaxed">
                  <span className="text-cyberpunk-yellow"># </span>
                  ADVANCED GAME DEVELOPMENT PROTOCOLS AND NEURAL PATHWAYS
                </p>
              </div>
            </div>

            <div className="cyberpunk-card p-6 gsap-scale group hover:shadow-neon-yellow transition-all duration-300 relative overflow-hidden border-cyberpunk-yellow">
              <div className="absolute inset-0 bg-cyberpunk-yellow opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-cyberpunk-base rounded flex items-center justify-center mx-auto mb-4 border border-cyberpunk-yellow group-hover:animate-cyberpunk-pulse">
                  <Code className="w-6 h-6 text-cyberpunk-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-text-white mb-2 font-tech uppercase tracking-wider">
                  <span className="text-cyberpunk-yellow">&gt; </span>.NET MATRIX
                </h3>
                <p className="text-cyberpunk-white font-tech text-sm leading-relaxed">
                  <span className="text-cyberpunk-yellow"># </span>
                  C# QUANTUM PROGRAMMING AND FRAMEWORK ENHANCEMENT MODULES
                </p>
              </div>
            </div>

            <div className="cyberpunk-card p-6 gsap-scale group hover:shadow-neon-yellow transition-all duration-300 relative overflow-hidden border-cyberpunk-yellow">
              <div className="absolute inset-0 bg-cyberpunk-yellow opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-cyberpunk-base rounded flex items-center justify-center mx-auto mb-4 border border-cyberpunk-yellow group-hover:animate-cyberpunk-pulse">
                  <Wrench className="w-6 h-6 text-cyberpunk-yellow" />
                </div>
                <h3 className="text-xl font-semibold text-text-white mb-2 font-tech uppercase tracking-wider">
                  <span className="text-cyberpunk-yellow">&gt; </span>DEV TOOLS
                </h3>
                <p className="text-cyberpunk-white font-tech text-sm leading-relaxed">
                  <span className="text-cyberpunk-yellow"># </span>
                  ENHANCED PRODUCTIVITY SUITES AND WORKFLOW OPTIMIZATION
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section with Cyberpunk Theme */}
      <section className="py-20 bg-cyberpunk-base relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 text-cyberpunk-yellow font-tech text-sm border border-cyberpunk-yellow/30 px-4 py-2 rounded blur-dark">
                <GitBranch className="w-4 h-4 animate-cyberpunk-pulse" />
                <span>&gt; RETRIEVING RECENT LOGS...</span>
              </div>
              <h2 className="text-3xl font-bold text-text-white gsap-fade-in font-cyberpunk uppercase tracking-wider">
                RECENT TRANSMISSIONS
              </h2>
            </div>
            <Link
              href="/posts"
              className="text-cyberpunk-yellow hover:text-cyberpunk-white font-tech font-medium gsap-fade-in cyberpunk-glow group border border-cyberpunk-yellow px-4 py-2 rounded hover:border-cyberpunk-white transition-all duration-300"
            >
              ACCESS ALL LOGS <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">&gt;&gt;</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post: PostPreview, index: number) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group"
              >
                <div className="cyberpunk-card p-6 gsap-slide-up hover:shadow-neon-yellow transition-all duration-300 group-hover:-translate-y-2 relative overflow-hidden border-cyberpunk-yellow/50 group-hover:border-cyberpunk-yellow">
                  <div className="absolute inset-0 bg-cyberpunk-yellow opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-sm text-cyberpunk-yellow mb-2 font-tech">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.frontmatter.date)}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-text-white mb-2 line-clamp-2 font-tech group-hover:text-cyberpunk-yellow transition-colors duration-300 uppercase tracking-wide">
                      <span className="text-cyberpunk-yellow">&gt; </span>
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-cyberpunk-white mb-4 line-clamp-3 font-tech text-sm leading-relaxed">
                      <span className="text-cyberpunk-yellow"># </span>
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {post.frontmatter.tags.slice(0, 2).map((tag: string) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 blur-dark text-cyberpunk-yellow rounded border border-cyberpunk-yellow/30 font-tech hover:bg-cyberpunk-yellow hover:text-cyberpunk-base transition-colors duration-300 uppercase tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.frontmatter.tags.length > 2 && (
                        <span className="text-xs px-2 py-1 blur-dark text-cyberpunk-white rounded border border-cyberpunk-white/30 font-tech uppercase">
                          +{post.frontmatter.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Cyberpunk scan line effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-cyberpunk-yellow animate-cyberpunk-scan"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cyberpunk Status Bar */}
      <section className="py-8 blur-dark border-t border-cyberpunk-yellow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm font-tech">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full animate-cyberpunk-pulse"></div>
                <span className="text-cyberpunk-yellow">NEURAL LINK: ACTIVE</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-cyberpunk-white" />
                <span className="text-cyberpunk-white">SECURITY: ENABLED</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-cyberpunk-yellow" />
                <span className="text-cyberpunk-yellow">CPU: 99.9%</span>
              </div>
              <div className="text-cyberpunk-yellow">
                &gt; READY FOR DATA TRANSFER
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 